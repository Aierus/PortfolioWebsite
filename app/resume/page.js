'use client';

import React from 'react';
import {Document, Page, pdfjs} from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({pdfUrl}) => {
  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} />
      </Document>
    </div>
  );
};

export default function Resume() {
  const pdfUrl = 'AndrewClarkResume.pdf'

  return (
    <main className="flex min-h-screen flex-col items-center bg-neutral-200 dark:bg-gray-800">
      <div className="w-full items-center justify-between font-mono text-sm dark:from-inherit text-black dark:text-white">
        <div className="flex left-0 top-0 flex w-full justify-center border-b border-gray-300 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-slate-700 dark:from-inherit">
          <h1 className="font-mono font-bold text-lg lg:text-4xl">Resume</h1>
        </div>
      </div>

      <a className="py-6" href="https://drive.google.com/file/d/1bb7brxScCfETGwRUm5zw0EbWDdr-Gdl1/view?usp=sharing">
        <PDFViewer pdfUrl={pdfUrl} />
      </a>

      <div className="z-10 text-left items-center justify-between font-mono text-lg px-6 pb-4 text-black dark:text-white">
        <div className="items-center text-center font-mono max-w-5xl mx-auto dark:text-white">
          You can download the resume by clicking on the pdf.
          <p className="text-md">
            If you have any questions feel free to email me at <a className="inline font-semibold underline decoration-indigo-500" href="mailto:clarkui@bc.edu">clarkui@bc.edu</a>
          </p>
        </div>
      </div>
    </main>
  )
}
