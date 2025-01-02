const Dropdown = ({ options }: { options: string[] }) => {
    return (
      <select className="border rounded px-4 py-2">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  };
  export default Dropdown;
  