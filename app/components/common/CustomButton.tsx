"use client";

import { Button } from "@/components/ui/button"
import Link from "next/link";

interface CustomButtonnProps{
  text:string;
  href?: string;
  onClick?:()=> void;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
}

export default function CustomButton({
  text,
  href,
  onClick,
  className ="",
  variant = "default",
  size = "lg",
  type = "button",
}: CustomButtonnProps){
  const sizeClasses: Record<"sm" | "md" | "lg", string> = {
    sm: "w-32 h-10 text-sm", // 작은 버튼
    md: "w-36 h-12 text-base", // 중간 크기 버튼
    lg: "w-40 h-14 text-lg", // 큰 버튼 (기본)
  };

  return (
    <Button
      onClick={onClick}
      type={type}
      className={`${sizeClasses[size]} bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${className}`}
      variant={variant}
    >
      {href ? (
        <Link href={href} className="w-full h-full flex items-center justify-center">
          {text}
        </Link>
      ) : (
        text
      )}
    </Button>
  )
  
}