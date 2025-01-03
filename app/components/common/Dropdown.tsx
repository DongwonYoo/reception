type DropdownProps = {
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function Dropdown({ options, value, onChange }: DropdownProps) {
  return (
      <select
          value={value}
          onChange={onChange}
          style={{ padding: "10px", margin: "5px", fontSize: "16px" }}
      >
          {options.map((option, index) => (
              <option key={index} value={option}>
                  {option}
              </option>
          ))}
      </select>
  );
}
