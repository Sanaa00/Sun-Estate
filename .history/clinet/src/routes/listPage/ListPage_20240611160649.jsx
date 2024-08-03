import './listPage.scss';
import { listData } from '../../lib/dummyData';
function ListPage() {
  const data = listData;
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Fillter />
        </div>
      </div>
    </div>
  );
}

export default ListPage;
