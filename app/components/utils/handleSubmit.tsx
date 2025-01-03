// components/utils/handleSubmit.ts
export async function handleSubmit(
    e: React.FormEvent,
    staffId: string | null,
    name: string,
    setErrorMessage: (msg: string) => void,
    setSuccessMessage: (msg: string) => void
) {
    e.preventDefault();

    if (!name || !staffId) {
        setErrorMessage("모든 정보를 입력해주세요.");
        return;
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
        } else {
            setErrorMessage(`메일 전송 실패: ${data.message}`);
        }
    } catch (error) {
        console.error("API 호출 오류:", error);
        setErrorMessage("메일 전송 중 오류가 발생했습니다.");
    }
}
