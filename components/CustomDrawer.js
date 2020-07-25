import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Container, Icon } from 'native-base';
import { DrawerItem } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <Container style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/example_profile_picture.png')} style={styles.profileCircle} />
        <Text style={styles.profileName}>John Doe</Text>
      </View>
      <View style={{flexGrow: 1}}>
        <DrawerItem icon={() => (<Icon type="MaterialIcons" name="home" style={styles.icon} />)} label="Home" onPress={() => {props.navigation.navigate('Home')}} />
        <DrawerItem icon={() => (<Icon type="Foundation" name="burst-new" style={styles.icon} />)} label="Discover" onPress={() => {props.navigation.navigate('Discover')}} />
        <DrawerItem icon={() => (<Icon type="MaterialIcons" name="collections" style={styles.icon} />)} label="My Collection" onPress={() => {props.navigation.navigate('My Collection')}} />
        <DrawerItem icon={() => (<Icon type="MaterialIcons" name="settings" style={styles.icon} />)} label="Settings" onPress={() => {props.navigation.navigate('Settings')}} />
      </View>
      <DrawerItem icon={() => (<Icon type="FontAwesome5" name="sign-out-alt" style={styles.icon} />)} label="Logout" onPress={() => {props.navigation.navigate('Main')}} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#52307c',
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  icon: {
    color: '#52307c',
    width: 25,
    fontSize: 25
  },
  profileName: {
    color: '#ffffff',
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 23
  },
  profileCircle: {
    height: 70,
    width: 70,
    borderRadius: 50,
    borderColor: '#ffffff',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5
  }
});

export default CustomDrawer;