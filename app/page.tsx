"use client";
import "../styles/globals.css";
import Card from "./components/common/Card";
import CustomButton from "./components/common/CustomButton";
import Text from "./components/common/Text";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50">
      <Card
        className="bg-orange-100 shadow-md rounded-lg p-8 w-full max-w-md"
      >
        <div className="text-center space-y-6">
          {/* 메시지 텍스트 */}
          <p className="text-lg font-semibold mb-2 text-center">
            ご来店ありがとうございます。
          </p>

          {/* 버튼 */}
          <CustomButton
            variant="outline"
            text="受付はこちら"
            href="/select-staff"
            className="w-3/4 h-14 text-lg mx-auto bg-white border border-gray-300 rounded-md shadow-md hover:bg-gray-100 hover:shadow-lg active:bg-gray-200 transition-all"
          />
        </div>
      </Card>
    </div>

  );
}
