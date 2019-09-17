import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { GamePdf } from './GamePdf';

export default function Game() {
  return (
    <React.Fragment>
      <h2></h2>
      <PDFDownloadLink
        document={<GamePdf />}
        fileName='movielist.pdf'
        style={{
          textDecoration: 'none',
          padding: '10px',
          color: '#4a4a4a',
          backgroundColor: '#f2f2f2',
          border: '1px solid #4a4a4a'
        }}
      >
        Download Engage prototype
      </PDFDownloadLink>
    </React.Fragment>
  );
}
