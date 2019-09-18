import React from 'react';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { GamePdf } from './GamePdf';

export default function Game() {
  return (
    <React.Fragment>
      <h2></h2>
      {/* <img src='https://www.lifewire.com/thmb/tJCIpF-chKxWvl0xjy-0ZuEI85E=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/random-numbers-over-blackboard-166043947-57bb63065f9b58cdfd31d1fe.jpg' /> */}
      <PDFViewer
        style={{
          textDecoration: 'none',
          padding: '10px',
          color: '#4a4a4a',
          backgroundColor: '#f2f2f2',
          border: '1px solid #4a4a4a',
          height: '90vh',
          width: 600
        }}
      >
        <GamePdf />
      </PDFViewer>
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
