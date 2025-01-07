"use client";
import "../styles/globals.css";
import Card from "./components/common/Card";
import CustomButton from "./components/common/CustomButton";
import Text from "./components/common/Text";

export default function Page() {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center gap-12">
        <Text as="h2" fontWeight="semi_bold" size="xl" className="text-center">
          ご来店ありがとうございます。
        </Text>
        <CustomButton
          size="xl"
          text="受付開始"
          href="/select-staff"
          variant="outline"
          className="text-gray-700 border border-gray-300"
        />
      </div>
    </Card>
  );
}
