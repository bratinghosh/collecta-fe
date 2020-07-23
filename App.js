import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BadgesScreen from './screens/BadgesScreen';
import DiscoverScreen from './screens/DiscoverScreen';
import MainScreen from './screens/MainScreen';
import MapScreen from './screens/MapScreen';
import MyCollectionScreen from './screens/MyCollectionScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import CustomDrawer from './components/CustomDrawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Drawer.Navigator initialRouteName="Map" drawerContent={props => <CustomDrawer {...props} />}>
          <Drawer.Screen name="Home" component={MapScreen} />
          <Drawer.Screen name="Discover" component={DiscoverScreen} />
          <Drawer.Screen name="My Collection" component={MyCollectionScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen name="Badges" component={BadgesScreen} />
        </Drawer.Navigator>
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