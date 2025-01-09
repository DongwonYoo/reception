import React from "react";
import { StaffAvatar } from "./StaffAvatar";
import Text from "../common/Text";

type Staff = {
  id: string;
  name: string;
  color?: string;
};

type StaffItemProps = {
  staff: Staff;
  onSelect: (staff: Staff) => void;
};

export function StaffItem({ staff, onSelect }: StaffItemProps) {
  return (
    <div
      onClick={() => onSelect(staff)}
      className="flex items-center justify-between px-4 py-2 
                 border border-gray-300 rounded-md bg-white 
                 text-gray-700 hover:bg-gray-100 active:bg-gray-200 
                 cursor-pointer w-half"
    >
      {/* 왼쪽: 아바타 + 이름 */}
      <div className="flex items-center space-x-3">
        <StaffAvatar name={staff.name} color={staff.color} />
        <Text as="p" size="md">
          {staff.name}
        </Text>
      </div>

      {/* 오른쪽: 화살표 아이콘 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}
