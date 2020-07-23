import React from 'react';
import {StyleSheet, Text } from 'react-native';
import { Button, Container } from 'native-base';

const RegisterScreen = () => {
  return (
    <Container style={styles.container}>
      <Button style={styles.button} onPress={() => {}} rounded bordered>
        <Text style={styles.buttonText}>Register</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
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
  }
});

export default RegisterScreen;