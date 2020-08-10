import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import DiscoverScreen from './screens/DiscoverScreen';
import MainScreen from './screens/MainScreen';
import MapScreen from './screens/MapScreen';
import MyCollectionScreen from './screens/MyCollectionScreen';
import LoginScreen from './screens/LoginScreen';

import CustomDrawer from './components/CustomDrawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainAppScreen = () => {
  return (
    <Drawer.Navigator initialRouteName="Map" drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={MapScreen} options={{ swipeEnabled: false }} />
      <Drawer.Screen name="Discover" component={DiscoverScreen} options={{ swipeEnabled: false }} />
      <Drawer.Screen name="My Collection" component={MyCollectionScreen} options={{ swipeEnabled: false }} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="App" component={MainAppScreen} />
          </Stack.Navigator>
        </SafeAreaView>
      </PaperProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;