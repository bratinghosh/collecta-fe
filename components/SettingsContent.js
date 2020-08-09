import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Container, DatePicker, Form} from 'native-base';
import { TextInput } from 'react-native-paper';

const SettingsContent = (props) => {
  const [name, setName] = React.useState('');
  const [dob, setDob] = React.useState(null);

  return (
    <Container style={styles.settingsContainer}>
      <Form>
        <TextInput placeholder="Name" value={name} onChangeText={(name) => {setName(name)}} style={styles.textInputBox} underlineColor="#52307c" />
        <DatePicker
          defaultDate={new Date()}
          modalTransparent={true}
          animationType={"fade"}
          placeHolderText="Select Date of Birth"
          textStyle={{ color: "#52307c", fontSize: 20 }}
          placeHolderTextStyle={{ color: "#52307c", fontSize: 20 }}
          onDateChange={(dob) => setDob(dob)}
        />
      </Form>
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
  }
});

export default SettingsContent;