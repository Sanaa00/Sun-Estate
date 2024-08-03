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
        </div>
      </div>
    </div>
  );
}

export default ListPage;
