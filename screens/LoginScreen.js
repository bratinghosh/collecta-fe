import React from 'react';
import {StyleSheet, Text } from 'react-native';
import { Button, Container, Icon } from 'native-base';
import { TextInput } from 'react-native-paper';

const LoginScreen = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Container style={styles.container}>
      <Button style={styles.backButton} onPress={() => props.navigation.navigate('Main')}>
        <Icon type="MaterialIcons" name="arrow-back" style={styles.backIcon}/>
      </Button>
      <TextInput placeholder="Email" value={email} onChangeText={email => setEmail(email)} style={styles.textInputBox} underlineColor="#52307c" />
      <TextInput placeholder="Password" value={password} onChangeText={password => setPassword(password)} style={styles.textInputBox} underlineColor="#52307c" />
      <Button style={styles.button} onPress={() => props.navigation.navigate('App')} rounded bordered>
        <Text style={styles.buttonText}>Login</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    left: 30,
    height: 60,
    justifyContent: 'center',
    position: 'absolute',
    top: 30,
    width: 60,
    shadowColor: '#52307c',
    shadowOpacity: 0.5,
    shadowOffset : { width: 2, height: 2}
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  backIcon: {
    color: '#52307c',
    fontSize: 27,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    justifyContent:'center',
    marginVertical: 10,
    width: 225,
    borderColor: '#52307c'
  },
  buttonText: {
    color: '#52307c',
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 5,
  },
  textInputBox: {
    height: 50,
    width: 300,
    marginBottom: 10
  }
});

export default LoginScreen;