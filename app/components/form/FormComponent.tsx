import InputField from "../common/InputField";
import Dropdown from "../common/Dropdown";
import Button from "../common/CustomButton";

type FormComponentProps = {
    name: string;
    setName: (name: string) => void;
    recipient: string;
    setRecipient: (email: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
};

export default function FormComponent({
    name,
    setName,
    recipient,
    setRecipient,
    handleSubmit,
}: FormComponentProps) {
    return (
        <form onSubmit={handleSubmit} style={{ textAlign: "center", marginTop: "50px" }}>
            <InputField
                placeholder="이름을 입력하세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <Dropdown
                options={["email1@example.com", "email2@example.com", "email3@example.com"]}
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
            />
            <br />
            <Button text="도착 알리기" type="submit" />
        </form>
    );
}
