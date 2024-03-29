import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Button, Container, Icon } from 'native-base';
import { TextInput } from 'react-native-paper';

const LoginScreen = (props) => {
  const [phoneNumber, setPhoneNumber] = React.useState('');

  return (
    <Container style={styles.container}>
      <Button style={styles.backButton} onPress={() => props.navigation.goBack()}>
        <Icon type="MaterialIcons" name="arrow-back" style={styles.backIcon}/>
      </Button>
      <View style={styles.inputContainer}>
        <TextInput placeholder="+852" style={styles.isdInputBox} underlineColor="#52307c" disabled/>
        <TextInput placeholder="Phone Number" value={phoneNumber} keyboardType="number-pad" onChangeText={phoneNumber => setPhoneNumber(phoneNumber)} style={styles.phoneNumberInputBox} underlineColor="#52307c" secureTextEntry={true}/>
      </View>
      <Button style={styles.loginButton} onPress={() => props.navigation.navigate('App')} rounded bordered>
        <Text style={styles.loginButtonText}>Login</Text>
      </Button>
      <View style={styles.oauthContainer}>
        <Button style={styles.oauthFacebookButton} onPress={() => {}} rounded bordered>
          <Icon type="FontAwesome" name="facebook-square" style={styles.facebookIcon}/>
          <Text style={styles.oauthFacebookButtonText}>Login with Facebook</Text>
        </Button>
        <Button style={styles.oauthGoogleButton} onPress={() => {}} rounded bordered>
          <Icon type="FontAwesome" name="google" style={styles.googleIcon}/>
          <Text style={styles.oauthGoogleButtonText}>Login with Google</Text>
        </Button>
      </View>
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
    shadowOffset : { width: 4, height: 4},
    elevation: 5
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
  loginButton: {
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    justifyContent:'center',
    marginVertical: 10,
    marginBottom: 25,
    width: 225,
    borderColor: '#52307c'
  },
  loginButtonText: {
    color: '#52307c',
    fontSize: 20,
    fontWeight: '600',
    paddingVertical: 5,
    width: 225,
    textAlign: 'center'
  },
  inputContainer: {
    flexDirection: 'row'
  },
  isdInputBox: {
    height: 50,
    marginBottom: 10,
    marginHorizontal: 5,
    width: 65
  },
  phoneNumberInputBox: {
    height: 50,
    marginBottom: 10,
    marginHorizontal: 5,
    width: 250
  },
  oauthContainer: {
    paddingTop: 25,
    width: Dimensions.get('window').width * 0.90,
    borderTopWidth: 1,
    borderColor: '#aaaaaa'
  },
  oauthFacebookButton: {
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    justifyContent:'center',
    marginVertical: 3,
    width: 300,
    borderColor: '#3b5998'
  },
  oauthFacebookButtonText: {
    color: '#3b5998',
    fontSize: 18,
    fontWeight: '400',
    paddingVertical: 5,
    width: 225,
    textAlign: 'center'
  },
  oauthGoogleButton: {
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    justifyContent:'center',
    marginVertical: 3,
    width: 300,
    borderColor: '#db4437'
  },
  oauthGoogleButtonText: {
    color: '#db4437',
    fontSize: 18,
    fontWeight: '400',
    paddingVertical: 5,
    width: 225,
    textAlign: 'center'
  },
  facebookIcon: {
    color: '#3b5998',
    fontSize: 27,
  },
  googleIcon: {
    color: '#db4437',
    fontSize: 27,
  }
});

export default LoginScreen;