import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Container, Icon } from 'native-base';
import { DrawerItem } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <Container style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.drawerItems}>
        <DrawerItem icon={() => (<Icon type="Entypo" name="new" style={styles.icon} />)} label="Discover" onPress={() => {props.navigation.navigate('Discover')}} />
        <DrawerItem icon={() => (<Icon type="FontAwesome5" name="ticket-alt" style={styles.icon} />)} label="My Collection" onPress={() => {props.navigation.navigate('My Collection')}} />
      </View>
      <DrawerItem icon={() => (<Icon type="Octicons" name="sign-out" style={styles.icon} />)} label="Logout" onPress={() => {props.navigation.navigate('Main')}} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerItems: {
    flexGrow: 1
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#52307c',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: '#52307c',
    width: 30,
    fontSize: 23
  },
  logo: {
    height: 70,
    width: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CustomDrawer;