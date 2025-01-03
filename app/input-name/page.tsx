"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import InputField from "../components/common/InputField";
import CustomButton from "../components/common/CustomButton";
import { handleSubmit } from "../components/utils/handleSubmit";


export default function InputNamePage() {
    const searchParams = useSearchParams();
    const staffId = searchParams.get("staffId"); // 선택된 스태프 ID
    const staffName = searchParams.get("staffName"); // 선택된 스태프 이름
    const [name, setName] = useState(""); // 입력된 사용자 이름
    const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지
    const [successMessage, setSuccessMessage] = useState(""); // 성공 메시지


    return (
        <div>
            <h1>이름 입력</h1>
            <p>선택된 스텝: {staffName}</p>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
            <form onSubmit= {(e) =>
                    handleSubmit(e, staffId, name, setErrorMessage, setSuccessMessage)
                }
            >
                <InputField
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="이름을 입력하세요"
                />
                <CustomButton text="메일 전송" type="submit"/>
            </form>
        </div>
    );
}
