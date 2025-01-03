"use client";

import { useRouter } from "next/navigation";
import StaffList from "../components/select-staff/StafFList";
import { useState } from "react";

export default function SelectStaffPage() {
    const [selectedStaff, setSelectedStaff] = useState<{ id: string; name: string } | null>(null);
    const router = useRouter();

    const handleNext = () => {
        if (!selectedStaff) {
            alert("스태프를 선택해주세요!");
            return;
        }
        // 선택된 스태프 ID와 이름을 쿼리 매개변수로 전달
        router.push(`/input-name?staffId=${selectedStaff.id}&staffName=${encodeURIComponent(selectedStaff.name)}`);
    };

    return (
        <div>
            <h1>스태프 선택</h1>
            {/* 스태프 리스트 렌더링 */}
            <StaffList onSelect={(staff) => setSelectedStaff(staff)} />
            <button
                onClick={handleNext}
                className="bg-blue-500 text-white px-4 py-2 mt-4"
            >
                다음
            </button>
        </div>
    );
}
