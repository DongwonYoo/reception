"use client";

import React from "react";

type TextProps = {
  size?: "sm" | "md" | "lg" | "xl" | "2xl"; // 텍스트 크기
  fontWeight?: "light" | "normal" | "medium" | "bold" | "semi_bold"; // 글자 두께
  children: React.ReactNode; // 텍스트 내용 (React 컴포넌트도 허용)
  className?: string; // 추가적인 클래스
  as?: "p" | "div" | "span" | "h2"; // 렌더링할 HTML 태그
}

export default function Text({
  size = "md",
  fontWeight = "normal",
  children,
  className = "",
  as: Component = "p",
}: TextProps) {
  const sizeClasses: Record<"sm" | "md" | "lg" | "xl" | "2xl", string> = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl", // 2xl 스타일 추가
  };

  const fontWeightClasses: Record<"light" | "normal" | "medium" | "semi_bold" | "bold", string> = {
    light: "font-light", // 얇은 글자
    normal: "font-normal", // 일반 글자
    medium: "font-medium", // 중간 글자
    semi_bold: "font-semibold",
    bold: "font-bold" // 굵은 글자
  };

  return (
    <Component
      className={`${sizeClasses[size]} ${fontWeightClasses[fontWeight]} ${className}`}
    >
      {children}
    </Component>
  );
}
