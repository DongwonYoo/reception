"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "../components/common/Card";
import CustomButton from "../components/common/CustomButton";
import Text from "../components/common/Text";

export default function Page() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(6); // 초기 남은 시간

  useEffect(() => {
    if (timeLeft === 0) {
      router.push("/"); // 남은 시간이 0이면 톱페이지로 이동
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1); // 1초 후 남은 시간 감소
    }, 1000);

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 또는 시간 변경 시 타이머 정리
  }, [timeLeft, router]);

  return (
    <Card
      title="受付が完了"
      subtitle="お掛けになって、少々お待ちください。"
      className="text-center flex items-center justify-center flex-col"
    >
      <div className="flex flex-col items-center gap-4">
        <CustomButton size="lg" text="受付終了" variant="outline" href="/" />
        <Text as="p" className="text-xs mt-6 text-slate-500">
          {timeLeft}秒後、自動的にトップページへ戻ります。
        </Text>
      </div>
    </Card>
  );
}
