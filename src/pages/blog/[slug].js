import { useRouter } from "next/router";
import React from "react";

export default function article() {
    const router = useRouter();

    const pushFunction = () => {
        router.push("/");
    };
    return (
        <div>
            <p>{router.query.slug}</p>
            <p>J'écris mon premier article</p>
            <button onClick={pushFunction}>Push to home</button>
        </div>
    );
}
