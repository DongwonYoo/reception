import React from "react";
import Text from "./Text";

type CardProps = {
  /** 카드 상단에 표시할 제목 */
  title?: string | React.ReactNode;
  /** 제목 아래 표시할 서브텍스트 */
  subtitle?: string;
  /** 카드 내용 */
  children: React.ReactNode;

  className?: string;
};

export default function Card({ title, subtitle, children, className }: CardProps) {
  return (
    <div className={`rounded-xl bg-orange-100 text-slate-700 w-full shadow-xl border border-orange-200 ${className || ""}`} >
      {/* 상단 영역 */}
      <div className="flex flex-col space-y-15 p-6">
        {/* title이 있으면 표시, 없으면 숨김 */}
        {title && (
          <Text as="div" fontWeight="semi_bold" size="lg" className="mb-2">
            {title}
          </Text>
        )}

        {/* subtitle이 있으면 표시, 없으면 숨김 */}
        {subtitle && (
          <Text as="div" size="sm" className="text-base">
            {subtitle}
          </Text>
        )}
      </div>

      {/* 내용 영역 */}
      <div className="p-6 pt-0 grid gap-6">{children}</div>
    </div>
  );
}
