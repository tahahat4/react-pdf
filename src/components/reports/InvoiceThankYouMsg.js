import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        // flexDirection: 'row',
        marginTop: 16
    },
    reportTitle:{
        fontSize: 12,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    footer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        height: 30,
        backgroundColor: '#90e5fc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 3,
      },
      footerText: {
        fontSize: 10,
        color: 'white',
      },
  });


  const InvoiceThankYouMsg = () => (
    <View style={styles.footer}>
        <Text style={styles.footerText}>I.C.E N° : 002244599523 - RC N°: 4815 - TEL : 0624363823</Text>
        <Text style={styles.footerText}>Email : taha@gmail.com - Adresse : 11 RUE Oujda , Oriental  , 1 RUE Oujda</Text>
    </View>
  );
  
  export default InvoiceThankYouMsg