type Staff = {
  id: string;
  name: string;
};

type StaffListProps = {
  onSelect: (staff: { id: string; name: string }) => void;
};

const staffMembers: Staff[] = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Alice Johnson" },
];

export default function StaffList({ onSelect }: StaffListProps) {
  return (
      <ul>
          {staffMembers.map((staff) => (
              <li
                  key={staff.id}
                  onClick={() => onSelect(staff)} // 선택된 스태프 정보 전달
                  className="p-2 border-b cursor-pointer hover:bg-gray-200"
              >
                  {staff.name}
              </li>
          ))}
      </ul>
  );
}
