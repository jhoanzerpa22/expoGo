
import { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CircleButton from '../components/CircleButton';
//import IconButton from '../components/IconButton';

import Constants from 'expo-constants';

import Balance from '../components/Balance';
import Transactions from '../components/Transactions';

export default function Home({ route }) {

  const navigation = useNavigation();

  const data = [
    {
      id: Math.random().toString(), // Genera un ID único
      title: 'Universidad',
      date: 'Today, 13:21',
      amount: 60,
      icon: '#0091FF',
      type: 'fijo'
    },
    {
      id: Math.random().toString(), // Genera un ID único
      title: 'Escuela',
      date: 'Yesterday, 20:07',
      amount: 88,
      icon: '#0091FF',
      type: 'fijo'
    },
    {
      id: Math.random().toString(), // Genera un ID único
      title: 'Internet',
      date: 'Thursday',
      amount: 40,
      icon: '#0091FF',
      type: 'fijo'
    },
    {
      id: Math.random().toString(), // Genera un ID único
      title: 'Gimnasia',
      date: 'Wensday',
      amount: 15,
      icon: '#0091FF',
      type: 'fijo'
    },
    {
      id: Math.random().toString(), // Genera un ID único
      title: 'Beisbol',
      amount: 15,
      icon: '#0091FF',
      type: 'fijo'
    },
    {
      id: Math.random().toString(), // Genera un ID único
      title: 'Comida',
      amount: 200,
      icon: '#34D058',
      type: 'fijo'
    },
    {
      id: Math.random().toString(), // Genera un ID único
      title: 'Gasolina',
      amount: 40,
      icon: '#FB8E41',
      type: 'fijo'
    },
    {
      id: Math.random().toString(), // Genera un ID único
      title: 'Pote',
      amount: 20,
      icon: '#AFB403',
      type: 'deuda'
    },
    {
      id: Math.random().toString(), // Genera un ID único
      title: 'Cashea Ary',
      amount: 25,
      icon: '#EEF40C',
      type: 'deuda'
    },
    {
      id: Math.random().toString(), // Genera un ID único
      title: 'Cashea Macuto',
      amount: 9,
      icon: '#EEF40C',
      type: 'deuda'
    },
    {
      id: Math.random().toString(), // Genera un ID único
      title: 'Cashea Utiles',
      amount: 24,
      icon: '#EEF40C',
      type: 'deuda'
    },
    {
      id: Math.random().toString(), // Genera un ID único
      title: 'Cashea Comida',
      amount: 20,
      icon: '#EEF40C',
      type: 'deuda'
    },
    {
      id: Math.random().toString(), // Genera un ID único
      title: 'Cashea Comida 2',
      amount: 10,
      icon: '#EEF40C',
      type: 'deuda'
    },
  ];
  
  const [gastos_row, setGastos] = useState(data);

  const { newGasto } = route.params|| {}; 

        useEffect(() => {
            if (newGasto) {
                setGastos([...gastos_row, newGasto]);
            }
        }, [newGasto]);

  const onAddGasto = () => {
    navigation.navigate('Gasto', {
        data: gastos_row,
      });
  };

  const onDetail = () => {
    navigation.navigate('Detail', {
        gastos: gastos_row,
      });
  };

  return (
    <View style={styles.container}>
        <View style={styles.staticSection}>
            <Balance gastos={gastos_row} showResume={true}/>
        </View>
        <View>
        <Transactions data={gastos_row}/>
        </View>
        <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
                <CircleButton onPress={onAddGasto} />
            </View>
        </View>
    </View>
  );
}

/**<IconButton icon="bar-chart" label="Gastos" onPress={onDetail} /> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    paddingTop: 16 + Constants.statusBarHeight,
    backgroundColor: '#25292e',
    overflowX: 'hidden',
    overflow: 'visible'
  },
  staticSection: {
    paddingHorizontal: 16,
  },
  optionsContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: '40%',//80,
    width: '100%'
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
