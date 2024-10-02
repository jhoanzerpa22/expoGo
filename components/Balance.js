import { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function Balance({ gastos }) {
  const [, regenerateRadomData] = useState();
  const forceUpdate = useCallback(() => regenerateRadomData({}), []);

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
        setExpanded(!expanded);
    };

  const sueldo = 880;
  const total_gastos_fijos = gastos.reduce((accumulator, current) => {
    return accumulator + (current.type == 'fijo' ? current.amount : 0);
  }, 0);
  const total_deudas = gastos.reduce((accumulator, current) => {
    return accumulator + (current.type == 'deuda' ? current.amount : 0);
  }, 0);
  const total_gastos = gastos.reduce((accumulator, current) => {
    return accumulator + (current.type == 'gasto' ? current.amount : 0);
  }, 0);

  return (
    <Pressable onPress={forceUpdate}>
    <View style={styles.container}>
      <View style={styles.layout}>
        <View>
          <Text style={styles.title}>Ingreso Mensual</Text>
          <Text style={styles.balance}>
            ${(sueldo).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.layout}>
        <View>
          <Text style={styles.title}>Gastos Fijos</Text>
          <Text style={styles.gastos_fijos}>
            ${(total_gastos_fijos).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.layout}>
        <View>
          <Text style={styles.title}>Deudas</Text>
          <Text style={styles.deudas}>
            ${(total_deudas).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.layout}>
        <View>
          <Text style={styles.title}>Gastos</Text>
          <Text style={styles.gastos}>
            ${(total_gastos).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.layout}>
        <View>
          <Text style={styles.title}>Saldo</Text>
          <Text style={[styles.saldo, (sueldo - (total_gastos_fijos + total_deudas + total_gastos)).toFixed(2) <= 300 && styles.saldoMin]}>
            ${(sueldo - (total_gastos_fijos + total_deudas + total_gastos)).toFixed(2)}
          </Text>
        </View>
        </View>
    </View>
    </Pressable>
  );
}
/**
 * 
        <LineChart
          data={{
            datasets: [
              {
                data,
              },
            ],
          }}
          width={Dimensions.get('window').width / 2 - 24}
          height={80}
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            fillShadowGradientFrom: '#fff',
            fillShadowGradientTo: '#fff',
            color: (opacity = 1) => `rgba(0, 200, 200, ${opacity * 2})`,
            propsForBackgroundLines: {
              stroke: 'transparent',
            },
          }}
          hidePointsAtIndex={[...Array(data.length - 1).keys()]}
          withHorizontalLabels={false}
          bezier
        />
 */

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    height: 100,
    borderRadius: 6,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: Platform.select({
      native: 12,
    }),
  },
  layout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#666',
    marginBottom: 6,
  },
  balance: {
    fontSize: 28,
    fontWeight: '600',
  },
  gastos_fijos: {
    fontSize: 28,
    fontWeight: '600',
  },
  gastos: {
    fontSize: 28,
    fontWeight: '600',
  },
  deudas: {
    fontSize: 28,
    fontWeight: '600',
  },
  saldo: {
    fontSize: 28,
    fontWeight: '600',
  },
  saldoMin: {
    fontSize: 28,
    fontWeight: '600',
    color: 'red'
  }
});
