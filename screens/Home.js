
import { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CircleButton from '../components/CircleButton';
//import IconButton from '../components/IconButton';

import * as SQLite from 'expo-sqlite';
//import SQLite from "expo-sqlite";

import Constants from 'expo-constants';

import Balance from '../components/Balance';
import Transactions from '../components/Transactions';

export default function Home({ route }) {

  const navigation = useNavigation();

  const initialDB = async () => {

    try {  
      //const db = await SQLite.openDatabaseAsync('presupuesto.db');

      //await db.execAsync('CREATE TABLE IF NOT EXIST gastos (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, amount INTEGER, icon TEXT, type TEXT)');

      //const allGastos = await db.getAllAsync('SELECT * FROM gastos');

      //console.log('Gastos',allGastos);

      //setBillsArr(allGastos)
      setGastos([...gastos_row, ...billsArr])

    } catch (error) {
      console.error(error);
    } finally {
      console.log('Listo DB');
    }
  };

  const data = [
    {
      id: Math.random().toString(),
      title: 'Universidad',
      date: 'Today, 13:21',
      amount: 50,
      icon: '#0091FF',
      type: 'fijo'
    },
    {
      id: Math.random().toString(),
      title: 'Escuela',
      date: 'Yesterday, 20:07',
      amount: 73,
      icon: '#0091FF',
      type: 'fijo'
    },
    {
      id: Math.random().toString(),
      title: 'Internet',
      date: 'Thursday',
      amount: 33,
      icon: '#0091FF',
      type: 'fijo'
    },
    {
      id: Math.random().toString(),
      title: 'Gimnasia',
      date: 'Wensday',
      amount: 15,
      icon: '#0091FF',
      type: 'fijo'
    },
    {
      id: Math.random().toString(),
      title: 'Beisbol',
      amount: 13,
      icon: '#0091FF',
      type: 'fijo'
    },
    {
      id: Math.random().toString(),
      title: 'Comida',
      amount: 200,
      icon: '#34D058',
      type: 'fijo'
    },
    {
      id: Math.random().toString(),
      title: 'Gasolina',
      amount: 40,
      icon: '#FB8E41',
      type: 'fijo'
    },
    {
      id: Math.random().toString(),
      title: 'Pote',
      amount: 20,
      icon: '#AFB403',
      type: 'deuda'
    },
    {
      id: Math.random().toString(),
      title: 'Cashea Ary',
      amount: 30,
      icon: '#EEF40C',
      type: 'deuda'
    },
    {
      id: Math.random().toString(),
      title: 'Cashea Macuto',
      amount: 8,
      icon: '#EEF40C',
      type: 'deuda'
    },
    {
      id: Math.random().toString(),
      title: 'Cashea Utiles',
      amount: 20,
      icon: '#EEF40C',
      type: 'deuda'
    },
    {
      id: Math.random().toString(),
      title: 'Cashea Comida',
      amount: 17,
      icon: '#EEF40C',
      type: 'deuda'
    },
    {
      id: Math.random().toString(),
      title: 'Cashea Comida 2',
      amount: 10,
      icon: '#EEF40C',
      type: 'deuda'
    },
    {
      id: Math.random().toString(),
      title: 'Cargador',
      amount: 7,
      icon: '#FF0000',
      type: 'gasto'
    },
    {
      id: Math.random().toString(),
      title: 'Recargas',
      amount: 6,
      icon: '#FF0000',
      type: 'gasto'
    },
    {
      id: Math.random().toString(),
      title: 'Perros sobrinos',
      amount: 16,
      icon: '#FF0000',
      type: 'gasto'
    },
    {
      id: Math.random().toString(),
      title: 'Traki',
      amount: 4,
      icon: '#FF0000',
      type: 'gasto'
    },
    {
      id: Math.random().toString(),
      title: 'Jugos',
      amount: 10,
      icon: '#FF0000',
      type: 'gasto'
    },
    {
      id: Math.random().toString(),
      title: 'Pizzas',
      amount: 14,
      icon: '#FF0000',
      type: 'gasto'
    },
    {
      id: Math.random().toString(),
      title: 'Empanada y diccionario',
      amount: 21,
      icon: '#FF0000',
      type: 'gasto'
    },
    {
      id: Math.random().toString(),
      title: 'Merienda',
      amount: 6,
      icon: '#FF0000',
      type: 'gasto'
    },
    {
      id: Math.random().toString(),
      title: 'Carne y Jz',
      amount: 10,
      icon: '#FF0000',
      type: 'gasto'
    },
    {
      id: Math.random().toString(),
      title: 'Franela',
      amount: 5,
      icon: '#FF0000',
      type: 'gasto'
    },
    {
      id: Math.random().toString(),
      title: 'Merienda 2',
      amount: 20,
      icon: '#FF0000',
      type: 'gasto'
    },
    {
      id: Math.random().toString(),
      title: 'Monte',
      amount: 10,
      icon: '#FF0000',
      type: 'gasto'
    },
    {
      id: Math.random().toString(),
      title: 'Dulces',
      amount: 4,
      icon: '#FF0000',
      type: 'gasto'
    },
    {
      id: Math.random().toString(),
      title: 'Empanadas',
      amount: 6,
      icon: '#FF0000',
      type: 'gasto'
    },
    {
      id: Math.random().toString(),
      title: 'Gasolina',
      amount: 15,
      icon: '#FF0000',
      type: 'gasto'
    },
    {
      id: Math.random().toString(),
      title: 'Raspado',
      amount: 4,
      icon: '#FF0000',
      type: 'gasto'
    },
  ];

  const [billsArr, setBillsArr] = useState([]);
  const [gastos_row, setGastos] = useState(data);

  const { newGasto } = route.params|| {}; 

  const addGastoDB = async (newGasto) => {

    try {
      
      //const db = await SQLite.openDatabaseAsync('presupuesto.db');
      //console.log('newGasto',newGasto);
      //const resultSet = await db.runAsync('INSERT INTO gastos (title, amount, icon, type) VALUES (?,?,?,?)', newGasto.title, newGasto.amount, newGasto.icon, newGasto.type);
      //console.log(result.lastInsertRowId, result.changes);
      
      let prevGastos = [...billsArr]
      prevGastos.push({id: resultSet.lastInsertRowId, title: newGasto.title, amount: newGasto.amount, icon: newGasto.icon, type: newGasto.type});
      setBillsArr(prevGastos);

    } catch (error){
      console.error(error);
    } finally {
      console.log('Listo consulta');
    }
};

const deleteGastoDB = async (id) => {
  try {
    //const db = await SQLite.openDatabaseAsync('presupuesto.db');

    //await db.runAsync('DELETE FROM gastos WHERE id = $value', { $value: id });

    let prevGastos = [...billsArr].filter((gasto) => gasto.id != id)
    setBillsArr(prevGastos);

  } catch (error){
    console.error(error);
  } finally {
    console.log('Listo delete');
  }
};

  useEffect(() => {

    initialDB();

      if (newGasto) {

          addGastoDB(newGasto);   
          setGastos([...gastos_row, newGasto]);
      }

  }, [newGasto]);

  const onDeleteGasto = (id) => {
    deleteGastoDB(id);
  }

  const onAddGasto = () => {
    navigation.navigate('Gasto', {
        data: gastos_row,
      });
  };

  /*const onDetail = () => {
    navigation.navigate('Detail', {
        gastos: gastos_row,
      });
  };*/

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
