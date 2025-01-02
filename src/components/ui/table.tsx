const Table = ({ data }: { data: { [key: string]: string }[] }) => {
    if (data.length === 0) return <p>No data available.</p>;
    return (
      <table className="table-auto border-collapse border border-gray-200 w-full">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key} className="border px-4 py-2">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i} className="border px-4 py-2">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  export default Table;
  