"use client";

import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

type CustomButtonnProps = {
  text?: string | React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "outline" | "secondary" | "link";
  size?: "sm" | "md" | "lg" | "xl" | "icon";
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
}


export default function CustomButton({
  text,
  href,
  onClick,
  className = "",
  variant = "default",
  size = "lg",
  type = "button",
  isLoading = false,
}: CustomButtonnProps) {
  const sizeClasses: Record<"sm" | "md" | "lg" | "xl" | "icon", string> = {
    sm: "w-32 h-10 text-sm", // 작은 버튼
    md: "w-36 h-12 text-base", // 중간 크기 버튼
    lg: "w-40 h-14 text-lg", // 큰 버튼 (기본)
    xl: "w-64 h-20 text-2xl",
    icon: "h-9 w-9",
  };

  return (
    <Button
      onClick={onClick}
      type={type}
      variant={variant}
      className={`${sizeClasses[size]} ${className} ${isLoading ? "cursor-not-allowed bg-gray-300" : ""
        } shadow-md`}
      disabled={isLoading} // 로딩 중 버튼 비활성화
    >
      {isLoading ? (
        <ArrowPathIcon className="animate-spin h-5 w-5" /> // Heroicons 스피너
      ) : href ? (
        <Link href={href} className="w-full h-full flex items-center justify-center">
          {text}
        </Link>
      ) : (
        text
      )}
    </Button>
  )

}