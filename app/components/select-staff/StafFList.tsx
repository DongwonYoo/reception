import React from "react";
import { StaffItem } from "./StaffItem";
import Text from "../common/Text";
import Card from "../common/Card";


type Staff = {
  id: string;
  name: string;
  color?: string;
};

type StaffListProps = {
  onSelect: (staff: { id: string; name: string }) => void;
};

const staffMembers: Staff[] = [
  { id: "1", name: "John Doe", color: "bg-red-400" },
  { id: "2", name: "Jane Smith", color: "bg-green-400" },
  { id: "3", name: "Alice Johnson", color: "bg-blue-400" },
];

export default function StaffList({ onSelect }: StaffListProps) {
  return (
    <Card title="Staff List"
      subtitle="担当のスタッフをお選びください。">
      {/* 상단 영역: 타이틀, 설명 */}

      {/* 목록 영역 */}
      <div className="p-6 pt-0 grid gap-6">
        {staffMembers.map((staff) => (
          <StaffItem
            key={staff.id}
            staff={staff}
            onSelect={onSelect}
          />
        ))}
      </div>
    </Card>
  );
}

