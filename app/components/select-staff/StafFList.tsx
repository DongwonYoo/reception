import React from "react";
import { StaffItem } from "./StaffItem";
import Text from "../common/Text";
import Card from "../common/Card";
import CustomButton from "../common/CustomButton";
import { useRouter } from "next/navigation";


type Staff = {
  id: string;
  name: string;
  color?: string;
};

type StaffListProps = {
  onSelect: (staff: { id: string; name: string }) => void;
};

const staffMembers: Staff[] = [
  { id: "1", name: "MITSUKI", color: "#d96c94" },
  { id: "2", name: "ASAMI", color: "#d97b29" },
  { id: "3", name: "TOMOKA", color: "#d94436" },
  { id: "4", name: "REINA", color: "#36b3d9" },

];

export default function StaffList({ onSelect }: StaffListProps) {
  const router = useRouter();
  return (
    <Card title={
      <div className="flex items-center gap-4">
        <CustomButton
          text={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          }
          size="icon"
          onClick={() => router.back()}
          className="bg-gray-500"
        />
        <span className="text-xl font-semibold">Staff List</span>
      </div>
    }
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

