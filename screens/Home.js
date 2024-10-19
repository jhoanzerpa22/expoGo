
import { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CircleButton from '../components/CircleButton';
//import IconButton from '../components/IconButton';

//import * as SQLite from 'expo-sqlite';
//import SQLite from "expo-sqlite";
//import SQLite from 'react-native-sqlite-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import RNFS from 'react-native-fs';
//import PouchDB from 'pouchdb';

import Constants from 'expo-constants';

import Balance from '../components/Balance';
import Transactions from '../components/Transactions';
import 'setimmediate';

export default function Home({ route }) {

  //const db = new PouchDB('gastos');

  /**Controla la navegacion entre componentes */
  const navigation = useNavigation();

  /**Abrir archivo con data */
  //const filePath = `${RNFS.DocumentDirectoryPath}/gastos.json`;
  const [gastos_row, setGastos] = useState([]);

  const { newGasto } = route.params|| {}; 

  const setSeeder = async () => {
    try{

      const seeder = [
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
          amount: 110,
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
          amount: 20,
          icon: '#EEF40C',
          type: 'deuda'
        },
        {
          id: Math.random().toString(),
          title: 'Cashea Macuto',
          amount: 5,
          icon: '#EEF40C',
          type: 'deuda'
        },
        {
          id: Math.random().toString(),
          title: 'Cashea Utiles',
          amount: 14,
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
        {
          id: Math.random().toString(),
          title: 'Tostones',
          amount: 32,
          icon: '#FF0000',
          type: 'gasto'
        },
        {
          id: Math.random().toString(),
          title: 'Jueves y Viernes',
          amount: 17,
          icon: '#FF0000',
          type: 'gasto'
        },
        {
          id: Math.random().toString(),
          title: 'Mercado',
          amount: 23,
          icon: '#FF0000',
          type: 'gasto'
        },
      ];

      await AsyncStorage.setItem('gastos', JSON.stringify(seeder));

    }catch (error){
      console.error('Error en seeder', error);
    }
  };

  /**Guardar un gasto */
  const saveGasto = async (gastoNew) => {
    try {
        const existingGastos = await AsyncStorage.getItem('gastos');
        //const existingGastos = await RNFS.readFile(filePath, 'utf8');
        /*db.put(gastoNew).then(() => {
          console.log('Documento agregado');
        });*/

        const gastosTableOld = existingGastos ? JSON.parse(existingGastos) : [];
        gastosTableOld.push(gastoNew);
        //await RNFS.writeFile(filePath, JSON.stringify(gastosTableOld), 'utf8');
        
        setGastos([...gastos_row, gastoNew]);

        await AsyncStorage.setItem('gastos', JSON.stringify(gastosTableOld));
    } catch (error) {
        console.error('Error al guardar el gasto:', error);
    }
  };

  /**Listar Gastos */
  const getGastos = async () => {
    try {
      /*db.allDocs({ include_docs: true }).then((result) => {
        console.log(result.rows);
        gastosTable = result.rows;
      });*/
        //const gastosTable = await RNFS.readFile(filePath, 'utf8');
        const gastosTable = await AsyncStorage.getItem('gastos');
        return gastosTable ? JSON.parse(gastosTable) : [];
    } catch (error) {
        console.error('Error al obtener los gastos:', error);
    }
  };

  /**Funcion inicial */
  const initialDB = async () => {
    try {
      //const db = SQLite.openDatabase({ name: 'gastos.db', location: 'default' });
      //const db = await SQLite.openDatabaseAsync('presupuesto.db');

      /*db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXIST gastos (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, amount INTEGER, icon TEXT, type TEXT);'
        );
      });*/

      //await db.execAsync('CREATE TABLE IF NOT EXIST gastos (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, amount INTEGER, icon TEXT, type TEXT)');

      //const allGastos = await db.getAllAsync('SELECT * FROM gastos');
      /*const getGastos = (callback) => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM gastos', [], (tx, results) => {
                const expenses = [];
                for (let i = 0; i < results.rows.length; i++) {
                    expenses.push(results.rows.item(i));
                }
                callback(expenses);
            });
        });
      };
      console.log('Gastos',getGastos);*/
      const allGastos = await getGastos();

      if(allGastos.length < 1){
        console.log('Ejecutando seeder');
        await setSeeder();
        initialDB();
      }else{
        console.log('Gastos',allGastos);
        setGastos(allGastos.reverse());
      }

    } catch (error) {
      console.error(error);
    } finally {
      console.log('Lista Carga');
    }
  };

  const addGastoDB = async (newGasto) => {

    try {
      
      //const db = await SQLite.openDatabaseAsync('presupuesto.db');
      //console.log('newGasto',newGasto);
      //const resultSet = await db.runAsync('INSERT INTO gastos (title, amount, icon, type) VALUES (?,?,?,?)', newGasto.title, newGasto.amount, newGasto.icon, newGasto.type);
      //console.log(result.lastInsertRowId, result.changes);
      
      await saveGasto(newGasto);    
      initialDB();
      
      //let prevGastos = [...billsArr]
      //prevGastos.push({id: resultSet.lastInsertRowId, title: newGasto.title, amount: newGasto.amount, icon: newGasto.icon, type: newGasto.type});
      //setBillsArr(prevGastos);

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

    //let prevGastos = [...billsArr].filter((gasto) => gasto.id != id)
    //setBillsArr(prevGastos);

  } catch (error){
    console.error(error);
  } finally {
    console.log('Listo delete');
  }
};

  useEffect(() => {
      if (newGasto) {
        addGastoDB(newGasto);
      }else{
        initialDB();
      }

  }, [newGasto]);

  console.log('Gastos_row???',gastos_row);

  const onDeleteGasto = (id) => {
    deleteGastoDB(id);
  }

  const onViewGasto = () => {
    navigation.navigate('Gasto', {
        data: gastos_row,
      });
  };

  /*const onViewDetail = () => {
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
                <CircleButton onPress={onViewGasto} />
            </View>
        </View>
    </View>
  );
}

/**<IconButton icon="bar-chart" label="Gastos" onPress={onViewDetail} /> */

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
