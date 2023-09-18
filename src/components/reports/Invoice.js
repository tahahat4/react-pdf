import React from 'react';
import { Page, Document, Image, StyleSheet  , View } from '@react-pdf/renderer';
import InvoiceTitle from './InvoiceTitle'
import BillTo from './BillTo'
import InvoiceNo from './InvoiceNo'
import InvoiceItemsTable from './InvoiceItemsTable'
import InvoiceThankYouMsg from './InvoiceThankYouMsg'
import logo from '../../../src/logo192.png'
import BillForm from './BillForm';


const styles = StyleSheet.create({
    page: {
        fontFamily: 'Helvetica',
        fontSize: 11,
        paddingTop: 10,
        paddingLeft:30,
        paddingRight:30,
        lineHeight: 1.5,
        flexDirection: 'column',
    }, 
    enTete:{
        flexDirection: 'row',
        alignItems:"center",
        justifyContent: "space-between"
    },
    logo: {
        width: 74,
        height: 66,
    },
    separator: {
        width: '100%',
        height: "0.3",
        backgroundColor: 'black',
        marginBottom: 10,
        marginTop: 10,
      },
      taha:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }
  });
  
  const Invoice = ({invoice}) => (
            <Document>
                {/* exemple 1  */}
                {/* <Page size="A4" style={styles.page}>
                    <Image style={styles.logo} src={logo} />
                    <InvoiceTitle title='Bon De Commande'/>
                    <InvoiceNo />
                    <View style={styles.separator} ></View>
                    <BillTo invoice={invoice}/>
                    <View style={styles.separator} ></View>
                    <InvoiceItemsTable invoice={invoice} />
                    <InvoiceThankYouMsg />
                </Page> */}

                {/* exemple 2 */}
                <Page size="A4" style={styles.page}>
                    <View style={styles.enTete}>
                        <Image style={styles.logo} src={logo} />
                        <BillForm invoice={invoice}/>
                    </View>
                    <View style={styles.separator} ></View>
                        <InvoiceTitle title='Bon De Commande'/>
                    <View style={styles.separator} ></View>
                        <InvoiceNo />

                    <View style={styles.separator} ></View>
                    <View style={styles.taha} >
                        
                        <BillTo invoice={invoice}/>
                    </View>
                    <View style={styles.separator} ></View>
                    <InvoiceItemsTable invoice={invoice} />
                    <InvoiceThankYouMsg />
                </Page>
            </Document>
        );
  
  export default Invoice