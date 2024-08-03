import { listData } from '../../lib/dummyData';
import './listPage.scss';
import Filter from '../../components/Filter/Filter';
import Card from '../../components/Card/Card';
import Map from '../../components/map/Map';
import { useLoaderData } from 'react-router-dom';
import { Suspense } from 'react';

function ListPage() {
  // const data = listData;
  const posts = useLoaderData();
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {/* {posts.map((item) => (
            <Card key={item.id} item={item} />
          ))} */}
          <Suspense fallback={<p>loading...</p>}></Suspense>
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
}

export default ListPage;
