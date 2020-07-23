import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import DiscoverScreen from './screens/DiscoverScreen';
import MainScreen from './screens/MainScreen';
import MapScreen from './screens/MapScreen';
import MyCollectionScreen from './screens/MyCollectionScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import CustomDrawer from './components/CustomDrawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainAppScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Map" drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={MapScreen} />
      <Drawer.Screen name="Discover" component={DiscoverScreen} />
      <Drawer.Screen name="My Collection" component={MyCollectionScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="App" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="App" component={MainAppScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;