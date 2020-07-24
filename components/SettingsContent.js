import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { Button, Container, Icon } from 'native-base';
import { TextInput } from 'react-native-paper';

const SettingsContent = (props) => {
  const [name, setName] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmNewPassword, setConfirmNewPassword] = React.useState('');

  return (
    <Container style={styles.settingsContainer}>
      <View style={styles.profile}>
        <Image source={require('../assets/images/example_profile_picture.png')} style={styles.profileCircle} />
        <Button style={styles.profileUpdateButton} onPress={() => {}}>
          <Icon type="MaterialIcons" name="create" style={styles.profileUpdateIcon} />
        </Button>
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
  profile: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginVertical: 20,
    marginHorizontal: 5
  },
  profileCircle: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderColor: '#52307c',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5
  },
  profileUpdateButton: {
    backgroundColor: '#52307c',
    height: 50,
    width: 50,
    borderRadius: 25,
    position: 'absolute',
    right: 3,
    bottom: 3
  },
  profileUpdateIcon: {
    color: '#ffffff',
    fontSize: 18
  }
});

export default SettingsContent;