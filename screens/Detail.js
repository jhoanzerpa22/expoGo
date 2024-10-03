
import { useState, useCallback } from 'react';
import {
    StyleSheet,
    View
  } from 'react-native';
import Constants from 'expo-constants';

import Balance from '../components/Balance';

export default function Detail({ route }) {
    
    const { gastos } = route.params;

  return (
    <View style={styles.container}>
          <View style={styles.staticSection}>
            <Balance gastos={gastos} showResume={false}/>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    paddingTop: 16 + Constants.statusBarHeight,
    backgroundColor: '#25292e'
  },
  staticSection: {
    paddingHorizontal: 16,
  },
});
