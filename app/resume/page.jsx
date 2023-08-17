import { files } from "/config";
import { notFound } from "next/navigation";
import Modal from "components/elements/client/Modal";
import Image from "next/image";
// import {pdfjs, Document, Page} from 'react-pdf'

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default async function ResumePage() { 
    return (
        <div>
            {/* <Document file={files.resume}>
                <Page pageIndex={0}/>
            </Document> */}
        </div>
    );
}
