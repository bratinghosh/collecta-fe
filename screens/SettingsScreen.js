import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Body, Container, Header, Icon, Left, Right } from 'native-base';

const SettingsScreen = (props) => {
  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <Left>
          <Button onPress={() => (props.navigation.openDrawer())} transparent>
            <Icon type="FontAwesome" name="bars" style={styles.headerIcon} />
          </Button>
        </Left>
        <Body>
          <Text style={styles.screenName}>Settings</Text>
        </Body>
        <Right>
          <Button onPress={() => (props.navigation.navigate('Main'))} transparent>
            <Icon type="FontAwesome" name="sign-out" style={styles.headerIcon} />
          </Button>
        </Right>
      </Header>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#52307c'
  },
  headerIcon: {
    color: '#ffffff',
    fontSize: 27,
  },
  screenName: {
    color: '#ffffff',
    fontSize: 22
  }
});

export default SettingsScreen;