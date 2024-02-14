'use client'
import { useState } from 'react';
import { Document, Page } from 'react-pdf';


const Converter = ({ File }) => {

    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    // let file = [];
    // for (let x of File) {
    //     file.push(x);
    // }
    // console.log(file)
    // const [url, seturl] = useState([])
    // console.log(url)
    // let files = []
    // console.log(files)
    // for (let i = 0; i < file.length; i++) {
    //     const fileReader = new FileReader()
    //     fileReader.onload = (e) => {
    //         e.preventDefault()
    //         const data = fileReader.result
    //         // console.log(data)
    //         files.push(data)
    //         // seturl(data)
    //     }
    //     fileReader.readAsDataURL(file[i])
    // }



    return (
        <div className="flex min-h-screen">
            <div className="w-3/4  flex justify-center items-center">
                <div>
                    <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                </div>
                {/* <div className="w-[400px] h-[200px]">
                    <iframe src={file} height="400" width="400" className="flex justify-center items-center"></iframe>

                </div> */}

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
        </div >
    );
};

export default Converter;