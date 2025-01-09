import React from "react";

type StaffAvatarProps = {
  name: string;
  color?: string;
};

export function StaffAvatar({ name, color }: StaffAvatarProps) {
  return (
    <span
      className={`h-8 w-8 rounded-full ${color || "bg-gray-400"}
                  flex items-center justify-center text-white font-semibold`}
      style={{ backgroundColor: color || "#ccc" }}
    >
      {name.charAt(0)}
    </span>
  );
}
