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
    const [description, setDescription] = useState('');
    const [expenses, setExpenses] = useState([]);
  
    const addExpense = () => {
      if (amount && description) {
        const newExpense = {
          id: Math.random().toString(), // Genera un ID único
          amount: parseFloat(amount),
          description: description,
        };
        setExpenses([...expenses, newExpense]);
        setAmount('');
        setDescription('');

        saveGastos(newExpense);
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
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Agregar Gasto" onPress={addExpense} />
    </View>
  );
}

/**<FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.expenseItem}>
            <Text>{item.description}: ${item.amount.toFixed(2)}</Text>
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
    expenseItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
  });
