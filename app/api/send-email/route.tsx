import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        // 1. 클라이언트 요청 데이터 추출
        const { staffId, name } = await request.json();

        // 2. 필수 값 확인
        if (!staffId || !name) {
            return NextResponse.json(
                { success: false, message: "Missing required fields: staffId or name" },
                { status: 400 }
            );
        }

        // 3. Google Apps Script 호출
        const apiUrl = process.env.GOOGLE_APPS_SCRIPT_URL; // 환경 변수 사용
        if (!apiUrl) {
            throw new Error("API URL is not configured.");
        }

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ staffId, name }),
        });

        // 4. 응답 확인
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Google Apps Script error: ${errorText}`);
        }

        // 5. 성공 응답 반환
        const data = await response.json();
        return NextResponse.json(data);

    } catch (error: any) {
        // 6. 에러 처리
        return NextResponse.json(
            { success: false, message: error.message || "An unexpected error occurred." },
            { status: 500 }
        );
    }
}
