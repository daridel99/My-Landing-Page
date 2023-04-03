import React from 'react'
import { Document, Page } from 'react-pdf';

export const HDV = () => {
  return (

    <>
      <Document file="../database/hojadevida_2.pdf">
        <Page pageNumber={1} />
      </Document>
    </>


  );
};