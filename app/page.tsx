"use client";
import '../styles/globals.css';
import CustomButton from "./components/common/CustomButton"


export default function(){
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">   
          <CustomButton
        text="버튼 클릭"
        href="/select-staff"
      />
      <a href="/select-staff">tasd</a>
    </div>
)
}