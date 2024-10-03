
import { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Balance from './components/Balance';
import Transactions from './components/Transactions';
import Gastos from './components/Gastos';

import CollapsibleView from './components/CollapsibleView';

export default function App_old() {

  const data = [/*
    {
      title: 'Universidad',
      date: 'Today, 13:21',
      amount: 60,
      icon: '#0091FF',
      type: 'fijo'
    },
    {
      title: 'Escuela',
      date: 'Yesterday, 20:07',
      amount: 88,
      icon: '#0091FF',
      type: 'fijo'
    },
    {
      title: 'Internet',
      date: 'Thursday',
      amount: 40,
      icon: '#0091FF',
      type: 'fijo'
    },
    {
      title: 'Gimnasia',
      date: 'Wensday',
      amount: 15,
      icon: '#0091FF',
      type: 'fijo'
    },
    {
      title: 'Beisbol',
      date: 'Tuesday',
      amount: 15,
      icon: '#0091FF',
      type: 'fijo'
    },
    {
      title: 'Comida',
      date: 'Tuesday',
      amount: 200,
      icon: '#34D058',
      type: 'fijo'
    },
    {
      title: 'Gasolina',
      date: 'Tuesday',
      amount: 40,
      icon: '#FB8E41',
      type: 'fijo'
    },
    {
      title: 'Pote',
      date: 'Tuesday',
      amount: 20,
      icon: '#AFB403',
      type: 'deuda'
    },
    {
      title: 'Cashea Ary',
      date: 'Tuesday',
      amount: 25,
      icon: '#EEF40C',
      type: 'deuda'
    },
    {
      title: 'Cashea Macuto',
      date: 'Tuesday',
      amount: 9,
      icon: '#EEF40C',
      type: 'deuda'
    },
    {
      title: 'Cashea Utiles',
      date: 'Tuesday',
      amount: 24,
      icon: '#EEF40C',
      type: 'deuda'
    },
    {
      title: 'Cashea Comida',
      date: 'Tuesday',
      amount: 20,
      icon: '#EEF40C',
      type: 'deuda'
    },
    {
      title: 'Cashea Comida 2',
      date: 'Tuesday',
      amount: 10,
      icon: '#EEF40C',
      type: 'deuda'
    },*/
  ];
  
  const [gastos_row, setGastos] = useState(data);

  const addGastos = (gastos) => {
    const newGasto = {
      title: gastos.description,
      date: 'Tuesday',
      amount: parseFloat(gastos.amount),
      icon: '#FF0000',
      type: 'gasto'
    };
    setGastos([...gastos_row, newGasto]);
    
  };

  return (
    <View style={styles.container}>
          <Balance gastos={gastos_row}/>
          <CollapsibleView title="Registro Gastos" style={styles.staticSection}>
            <Gastos saveGastos={addGastos}/>
          </CollapsibleView>
          <CollapsibleView title="Transacciones" style={styles.staticSection}>
            <Transactions data={gastos_row}/>
          </CollapsibleView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    paddingTop: 16 + Constants.statusBarHeight,
    backgroundColor: '#25292e',
    overflowX: 'hidden',
  },
  staticSection: {
    paddingHorizontal: 16,
  },
});
