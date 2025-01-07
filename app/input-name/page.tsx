"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import InputField from "../components/common/InputField";
import CustomButton from "../components/common/CustomButton";
import { handleSubmit } from "../components/utils/handleSubmit";
import Card from "../components/common/Card";

export default function InputNamePage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const staffId = searchParams.get("staffId");
    const staffName = searchParams.get("staffName");
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    return (
        <Card title="이름 입력" subtitle={`선택된 스텝: ${staffName || ""}`}>

            {/* 폼 영역 */}
            <div className="p-6 pt-0">
                <form
                    onSubmit={(e) =>
                        handleSubmit(e, staffId, name, setErrorMessage, setSuccessMessage)
                    }
                >
                    <InputField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="お客様の名前を入力してください"
                    />
                    <CustomButton
                        text="뒤로가기"
                        variant="outline"
                        onClick={() => router.back()}
                    />
                    <CustomButton text="受付" type="submit" className="mt-4" />
                </form>
            </div>
        </Card>

    );
}
