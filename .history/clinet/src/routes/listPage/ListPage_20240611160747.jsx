import './listPage.scss';
import { listData } from '../../lib/dummyData';
import Filter from '../../components/navbar/Filter/Filter';
function ListPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => {
            <Card key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ListPage;
