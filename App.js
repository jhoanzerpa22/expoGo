import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Gasto from './screens/Gasto';
import Detail from './screens/Detail';
import 'setimmediate';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#fff',
          card: '#f1f3f5',
          border: 'transparent',
        },
      }}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gasto" component={Gasto} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}