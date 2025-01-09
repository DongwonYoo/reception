import { Suspense } from "react";
import InputNamePage from "./InputNamePage";

export default function Page() {
    return (
        <div className="w-3/4">
            <Suspense fallback={<div>Loading...</div>}>
                <InputNamePage />
            </Suspense>
        </div>
    );
}
