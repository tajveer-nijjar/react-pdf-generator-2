import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PdfDocument } from './Movie';

export default function MovieList() {
  return (
    <div className='container'>
      <h2>a</h2>

      <PDFDownloadLink
        document={<PdfDocument />}
        fileName='movielist.pdf'
        style={{
          textDecoration: 'none',
          padding: '10px',
          color: '#4a4a4a',
          backgroundColor: '#f2f2f2',
          border: '1px solid #4a4a4a'
        }}
      >
        Download Pdf
      </PDFDownloadLink>
    </div>
  );
}
