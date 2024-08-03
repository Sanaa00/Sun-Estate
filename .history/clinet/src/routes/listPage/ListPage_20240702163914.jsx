import { listData } from '../../lib/dummyData';
import './listPage.scss';
import Filter from '../../components/Filter/Filter';
import Card from '../../components/Card/Card';
import Map from '../../components/map/Map';
import { Await, useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

function ListPage() {
  // const data = listData;
  const data = useLoaderData();
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {/* {posts.map((item) => (
            <Card key={item.id} item={item} />
          ))} */}
          <Suspense fallback={<p>loading...</p>}>
            <Await
              resolve={data.packageLocation}
              errorElement={<p>Error loading location!</p>}
            >
              {(postResponse) =>
                postResponse.data.map((post) => {
                  <Card key={post.id} item={post} />;
                })
              }
              {/* {(packageLocation) => {
                <p>
                  your package ia at {packageLocation.latitude} lat and{' '}
                  {packageLocation.longitude}long{' '}
                </p>;
              }} */}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;
