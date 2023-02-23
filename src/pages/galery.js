import React from "react";
import Image from "next/image";
import img1 from "../../public/assets/img1.jpg";
import img2 from "../../public/assets/img2.jpg";

export default function galery() {
    return (
        <div style={{ width: "80%", margin: "0 auto" }}>
            <Image
                layout="responsive"
                placeholder="blur"
                src={img1}
                width="16"
                height="9"
            />
            <Image
                layout="responsive"
                placeholder="blur"
                src={img2}
                width="16"
                height="9"
            />
        </div>
    );
}
