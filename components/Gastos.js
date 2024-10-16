import { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Platform,
  TextInput, 
  Button, 
  FlatList
} from 'react-native';

export default function Gastos({ saveGastos }) {
    const [amount, setAmount] = useState('');
    const [title, setTitle] = useState('');
    const [gastos, setGastos] = useState([]);
  
    const addGasto = () => {
      if (amount && title) {
        const newGasto = {
          id: Math.random().toString(), // Genera un ID único
          amount: parseFloat(amount),
          title: title
        };
        setGastos([...gastos, newGasto]);
        setAmount('');
        setTitle('');

        saveGastos(newGasto);
      }
    };


  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Registro de Gastos</Text>
      <TextInput
        style={styles.input}
        placeholder="Monto"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Agregar Gasto" onPress={addGasto} />
    </View>
  );
}

/**<FlatList
        data={gastos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.gastoItem}>
            <Text>{item.title}: ${item.amount.toFixed(2)}</Text>
          </View>
        )}
      />*/

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    header: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#ecf0f1',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: '#ddd',
      },
    headerTitle: {
        color: '#666',
      },
    /*title: {
      fontSize: 24,
      marginBottom: 20,
    },*/
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 10,
    },
    gastoItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
  });
