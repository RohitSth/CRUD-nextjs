const HomePage = () => {
  return (
    <>
      <div>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold">Welcome to CRUD</h1>
          <p className="text-lg">
            A simple CRUD app built with Next.js and Supabase
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
