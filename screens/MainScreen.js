import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { Button, Container } from 'native-base';

const MainScreen = (props) => {
  return (
    <Container style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Button style={styles.button} onPress={() => {props.navigation.navigate('Login')}} rounded>
        <Text style={styles.buttonText}>Login</Text>
      </Button>
      <Button style={styles.button} onPress={() => {props.navigation.navigate('Register')}} rounded>
        <Text style={styles.buttonText}>Register</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#52307c',
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    alignSelf: 'center',
    height: 225,
    width: 225,
    marginBottom: 20
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    justifyContent:'center',
    marginVertical: 5,
    paddingVertical: 10,
    width: 225,
  },
  buttonText: {
    color: '#52307c',
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 5,
  }
});

export default MainScreen;