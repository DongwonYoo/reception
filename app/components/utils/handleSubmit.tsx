
export async function handleSubmit(
    e: React.FormEvent,
    staffId: string | null,
    name: string,
    setErrorMessage: (msg: string) => void,
    setSuccessMessage: (msg: string) => void
): Promise<boolean> { // 반환 타입을 Promise<boolean>으로 설정
    e.preventDefault();

    if (!name || !staffId) {
        setErrorMessage("모든 정보를 입력해주세요.");
        return false; // 실패 시 false 반환
    }

    try {
        const response = await fetch("/api/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ staffId, name }),
        });

        const data = await response.json();

        if (data.success) {
            setSuccessMessage("메일이 성공적으로 전송되었습니다.");
            return true; // 성공 시 true 반환
        } else {
            setErrorMessage(`메일 전송 실패: ${data.message}`);
            return false; // 실패 시 false 반환
        }
    } catch (error) {
        console.error("API 호출 오류:", error);
        setErrorMessage("메일 전송 중 오류가 발생했습니다.");
        return false; // 실패 시 false 반환
    }
}
