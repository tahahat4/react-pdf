import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        // marginTop: 6
    },
    billTo: {
        // marginTop: 20,
        // paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
    label:{
        fontFamily: 'Roboto',
        fontWeight: 'bold' ,
        fontSize: 10,
        width : 120 ,
    },
    invoiceNoContainer: {
        flexDirection: 'row',
        justifyContent: 'start',
    },
    labelcontent : {
        fontFamily: 'Roboto',
        fontWeight: 300 ,
        fontSize: 10,
    },
  });


  const BillTo = ({invoice}) => (
    <View style={styles.headerContainer}>
        <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}>Nom : </Text>
                <Text style={styles.labelcontent}>Mohammed Taha Hathout</Text>
        </View >
        <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}>Telephone : </Text>
                <Text style={styles.labelcontent}>+212 624-363-823</Text>
        </View >
        
        <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}>Email : </Text>
                <Text style={styles.labelcontent}>Taha@gmail.com</Text>
        </View >

        <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}>Adresse de facture : </Text>
                <Text style={styles.labelcontent}>12 Rue , Oujda , Oriental | 60000</Text>
        </View >
        <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}>Adresse de livrasion : </Text>
                <Text style={styles.labelcontent}>15 Rue , Rabat , Rabat/Sale | 10000</Text>
        </View >
    </View>
  );
  
  export default BillTo