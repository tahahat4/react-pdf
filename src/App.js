import React, { Component, Fragment } from 'react';
import {PDFDownloadLink, PDFViewer} from '@react-pdf/renderer'
import Invoice from './components/reports/Invoice'
import invoice from './data/invoice'

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

    //   <PDFDownloadLink document={<Invoice invoice={invoice}/> } fileName="Commande.pdf">
    //   {({ blob, url, loading, error }) =>
    //     loading ? 'Loading document...' : 'Download now!'
    //   }
    // </PDFDownloadLink>

  
        <Fragment>
            <PDFViewer width="100%" height="940" className="app" >
                <Invoice invoice={invoice}/>
            </PDFViewer>
        </Fragment>
    );
  }
}

export default App;