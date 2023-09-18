import React, { Fragment } from 'react';
import {Text, View, StyleSheet , Font } from '@react-pdf/renderer';


Font.register({
    family: 'Roboto',
    fonts: [
      {
        src: 'https://fonts.cdnfonts.com/s/12165/Roboto-Light.woff',
        fontWeight: 300,
      },
      {
        src: 'https://fonts.cdnfonts.com/s/12165/Roboto-Bold.woff',
        fontWeight: 'bold',
      },
    ],
  });


const styles = StyleSheet.create({
    margintitle : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // justifyContent: 'flex-end'
    },
    invoiceNoContainer: {
        // flexDirection: 'row',
        
    },
    
    label:{
        fontFamily: 'Roboto',
        fontWeight: 'bold' ,
        fontSize: 10,
        width : 150 ,
    },
    labelcontent : {
        fontFamily: 'Roboto',
        fontWeight: 300 ,
        fontSize: 10,
    },

    
  });

const currentDate = new Date().toLocaleDateString();

  const InvoiceNo = () => (
        <View style={styles.margintitle}>
            <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}>Numéro de commande : </Text>
                <Text style={styles.labelcontent}>XZY-128</Text>
            </View >

            
            <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}>Date de commande: </Text>
                <Text style={styles.labelcontent}>{currentDate}</Text>
            </View >
            
        </View>
  );
  
  export default InvoiceNo