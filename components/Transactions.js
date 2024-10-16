import { SectionList, FlatList, View, StyleSheet, Text } from 'react-native';

import TransactionItem from './TransactionItem';

export default function Transactions({ data }) {
  const DATA = [
    {
      title: 'Transacciones',
      data: data,
    },
  ];
  /*return (
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
  );*/
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item }) => <TransactionItem data={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      )}
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
  container2: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
