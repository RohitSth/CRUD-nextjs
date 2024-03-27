import Table from "./table/page";
import Search from "./search/page";

const List = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-blue-500 shadow-md sm:rounded-lg mt-10">
        <Search />
        <Table />
      </div>
    </>
  );
};

export default List;
