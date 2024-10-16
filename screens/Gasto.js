
import { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';

import Gastos from '../components/Gastos';

export default function Gasto({ route }) {
  const navigation = useNavigation();

  const { data } = route.params;

  //const [gastos_row, setGastos] = useState(data);

  const addGastos = (gastos) => {
    const newGasto = {
      id: gastos.id,
      title: gastos.title,
      amount: parseFloat(gastos.amount),
      icon: '#FF0000',
      type: 'gasto'
    };
    //setGastos([...gastos_row, newGasto]);

    navigation.navigate('Home', {
        newGasto: newGasto,
      });
  };

  return (
    <View style={styles.container}>
          <View style={styles.staticSection}>
            <Gastos saveGastos={addGastos}/>
          </View>
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
