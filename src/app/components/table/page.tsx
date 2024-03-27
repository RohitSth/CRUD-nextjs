import TableHead from "../TableHead";
import ListItems from "../ListItems";

const Table = () => {
  return (
    <>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <TableHead />
        <tbody>
          <ListItems />
          <ListItems />
          <ListItems />
          <ListItems />
        </tbody>
      </table>
    </>
  );
};

export default Table;
