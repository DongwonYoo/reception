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
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 추가

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 이름이 없을 경우 에러 메시지 표시
    if (!name.trim()) {
      setErrorMessage("お客様の名前を入れてください");
      return;
    }

    setErrorMessage(""); // 에러 메시지 초기화
    setIsLoading(true); // 로딩 상태 활성화

    // handleSubmit에서 성공 여부를 반환
    const isSuccess = await handleSubmit(e, staffId, name, setErrorMessage, setSuccessMessage);
    setIsLoading(false); // 로딩 상태 비활성화

    if (isSuccess) {
      router.push("/completed"); // 성공 시 페이지 이동
    }
  };

  return (
    <Card
      title={
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
          <span className="text-xl font-semibold">受付</span>
        </div>
      }
      subtitle={`担当スタッフ名: ${staffName || ""}`}
      className="shadow-lg rounded-lg p-6 w-full max-w-md"
    >
      <form
        onSubmit={handleFormSubmit} className="space-y-6"
      >
        {/* 에러 메시지 표시 */}
        {errorMessage && <p className="text-red-500 font-bold text-sm">{errorMessage}</p>}
        <InputField
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="お客様の名前を入力してください"
          className="w-full"
        />
        <CustomButton
          variant="outline"
          text="受付"
          type="submit"
          className="w-full"
          isLoading={isLoading}
        />
      </form>
    </Card>


  );
} 