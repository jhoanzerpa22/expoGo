import { FlatList, View, StyleSheet, Text } from 'react-native';

import TransactionItem from './TransactionItem';

export default function Transactions({ data }) {
  return (
    <FlatList
      data={data}
      style={{ flex: 1, maxHeight: '40%' }}
      renderItem={({ item }) => <TransactionItem data={item} />}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Transacciones</Text>
        </View>
      )}
      stickyHeaderIndices={[0]}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#ecf0f1',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#ddd'
  },
  headerTitle: {
    color: '#666',
  },
});
