import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        // 클라이언트 요청 데이터 추출
        const { staffId, name } = await request.json();

        if (!staffId || !name) {
            return NextResponse.json(
                { success: false, message: "Missing required fields: staffId or name" },
                { status: 400 }
            );
        }

        // Google Apps Script로 데이터 전달
        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbyTxmJMaM-7hUMbwLfX1pLCxqSvpWdwfEtBN9s-z_hQFvlAZXp4zumPHz2Mayjns_g/exec",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ staffId, name }),
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Google Apps Script error: ${errorText}`);
        }

        const data = await response.json();
        return NextResponse.json(data); // 클라이언트로 응답 전달
    } catch (error) {
        return NextResponse.json(
            { success: false, message: error.message },
            { status: 500 }
        );
    }
}
