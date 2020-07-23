import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Container } from 'native-base';
import { TextInput } from 'react-native-paper';

const SettingsContent = (props) => {
  const [name, setName] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmNewPassword, setConfirmNewPassword] = React.useState('');

  return (
    <Container style={styles.settingsContainer}>
      <View style={styles.profileCircle}>
        <Text style={styles.profileText}>JD</Text>
      </View>
      <TextInput placeholder="John Doe" value={name} onChangeText={(name) => {setName(name)}} style={styles.textInputBox} underlineColor="#52307c" />
      <TextInput placeholder="johndoe123@gmail.com" value={null} style={styles.textInputBox} underlineColor="#52307c" disabled/>
      <TextInput placeholder="New Password" value={newPassword} onChangeText={(newPassword) => {setNewPassword(newPassword)}} style={styles.textInputBox} underlineColor="#52307c" secureTextEntry={true}/>
      <TextInput placeholder="Confirm New Password" value={confirmNewPassword} onChangeText={(confirmNewPassword) => {setConfirmNewPassword(confirmNewPassword)}} style={styles.textInputBox} underlineColor="#52307c" secureTextEntry={true}/>
      <Button style={styles.button} onPress={() => {}} rounded bordered>
        <Text style={styles.buttonText}>Update</Text>
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
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
    width: 225,
    textAlign: 'center'
  },
  textInputBox: {
    height: 50,
    width: 300,
    marginBottom: 10
  },
  settingsContainer: {
    alignItems: 'center',
    marginVertical: 20
  },
  profileCircle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#52307c33',
    borderColor: '#52307c',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  profileText: {
    color: '#52307c',
    fontSize: 50,
    fontWeight: '700'
  }
});

export default SettingsContent;