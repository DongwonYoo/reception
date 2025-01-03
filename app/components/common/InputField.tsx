type InputFieldProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export default function InputField({ value, onChange, placeholder }: InputFieldProps) {
  return (
      <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{ padding: "10px", margin: "5px", fontSize: "16px" }}
      />
  );
}
