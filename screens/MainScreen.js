import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { Button, Container } from 'native-base';

const MainScreen = (props) => {
  return (
    <Container style={styles.container}>
      <Image source={require('../assets/images/logo_flipped.png')} style={styles.logo} />
      <Text style={styles.companySlogan}>Discover. Collect. Redeem.</Text>
      <Button style={styles.button} onPress={() => {props.navigation.navigate('Login')}} rounded bordered>
        <Text style={styles.buttonText}>Get Started</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    alignSelf: 'center',
    height: 225,
    width: 225
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    justifyContent:'center',
    marginVertical: 5,
    paddingVertical: 10,
    width: 225,
    borderColor: '#52307c'
  },
  buttonText: {
    color: '#52307c',
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 5,
    width: 225,
    textAlign: 'center'
  },
  companySlogan: {
    color: '#52307c',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 75
  }
});

export default MainScreen;