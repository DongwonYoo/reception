import { Input } from "@/components/ui/input"

type InputFieldProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string
};

export default function InputField({ value, onChange, placeholder, className = "", }: InputFieldProps) {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`placeholder-gray-400 border border-gray-300 rounded-md bg-white 
        text-gray-700 hover:bg-gray-100 active:bg-gray-200 
        cursor-pointer w-64 h-12 ${className}`}
    />
  );
}
