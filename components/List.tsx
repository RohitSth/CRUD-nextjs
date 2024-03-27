import Search from "./Search";
import TableHead from "./TableHead";
import ListItems from "./ListItems";

const List = () => {
  return (
    <>
      <div className="relative overflow-x-auto shadow-blue-500 shadow-md sm:rounded-lg">
        <Search />

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <TableHead />
          <tbody>
            <ListItems />
            <ListItems />
            <ListItems />
            <ListItems />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default List;
