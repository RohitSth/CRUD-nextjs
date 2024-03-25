import Table from "../table/page";
import Search from "../search/page";

const HomePage = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Search />
        <Table />
      </div>
    </>
  );
};

export default HomePage;
