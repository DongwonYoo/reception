"use client";

import { useRouter } from "next/navigation";
import StaffList from "../components/select-staff/StafFList";

export default function SelectStaffPage() {
    const router = useRouter();

    // staff 클릭 시 곧바로 이동
    const handleSelect = (staff: { id: string; name: string }) => {
        // 선택된 스태프 정보로 페이지 이동
        router.push(
            `/input-name?staffId=${staff.id}&staffName=${encodeURIComponent(
                staff.name
            )}`
        );
    };

    return (
        <div className="w-3/4">
            {/* 스태프 리스트 */}
            <StaffList onSelect={handleSelect} />
        </div>
    );
}