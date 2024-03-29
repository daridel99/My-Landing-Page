import React from 'react';
import { Document, Page } from 'react-pdf';

import pdfFile from '/hojadevida_2.pdf';

export const HDV = () => {
  return (
<>
    <h1 className='font-bold text-2xl'>
    <a class="btn btn-download" href="https://landing-page-daridel.netlify.app/hojadevida_2_page1.jpg" download="hojadevida_2_page1.jpg">Hoja de Vida</a>
      </h1> 
    <div class="scrolling-wrapper-y">
    <img src="/hojadevida_2_page1.jpg" alt="HDV" width="75%" height="75%"/>
    </div>
   
</>

  );
};
