"use client"
import Image from "next/image";
import { useState } from "react";

const Converter = ({ File }) => {
    const [url, seturl] = useState({})
    const fileReader = new FileReader()
    fileReader.onload = (e) => {
        e.preventDefault()
        const data = fileReader.result
        seturl(data)
    }
    fileReader.readAsDataURL(File)
    return (
        <div className="flex min-h-screen">
            <div className="w-3/4">
                <iframe src={url} width="100%" height="600px"></iframe>
                {/* <embed src={url} type="application/pdf" width="100%" height="600px" /> */}

                {/* <Image
                    src={url}
                    width={400}
                    height={60}
                    alt="img">
                </Image> */}
            </div>
            <div className="w-1/4 ">

            </div>
        </div>
    );
};

export default Converter;