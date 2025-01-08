import { Suspense } from "react";
import InputNamePage from "./InputNamePage";

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <InputNamePage />
        </Suspense>
    );
}
