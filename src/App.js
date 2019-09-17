import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer
} from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";

import "./App.css";
import MovieList from "./MovieList";
import Abc from "./Abc";
import { ReactDOM } from "react-dom";

function App() {
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default App;
