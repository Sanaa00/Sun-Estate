import './listPage.scss';
import { listData } from '../../lib/dummyData';
import Filter from '../../components/navbar/Filter/Filter';
import Card from '../../components/navbar/Card/Card';
import Map from '../../components/navbar/map/Map';
function ListPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => {
            return <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
      <div className="mapContainer">
        <Map item={item} />
      </div>
    </div>
  );
}

export default ListPage;
