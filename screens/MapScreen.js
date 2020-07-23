import React from 'react';
import { StyleSheet } from 'react-native';
import { Body, Button, Container, Icon, Header, Left, Text, Right } from 'native-base';

const MapScreen = ({navigation}) => {
  return (
    <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button onPress={() => (navigation.openDrawer())} transparent>
              <Icon type="FontAwesome" name="bars" style={styles.headerIcon} />
            </Button>
          </Left>
          <Body>
            <Text style={styles.screenName}>Home</Text>
          </Body>
          <Right />
        </Header>
        <Button style={styles.centerMapButton} onPress={() => {}}>
          <Icon type="FontAwesome5" name="crosshairs" style={styles.buttonIcon}/>
        </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  centerMapButton: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    bottom: 30,
    height: 60,
    justifyContent: 'center',
    position: 'absolute',
    right: 30,
    width: 60,
    shadowColor: '#52307c',
    shadowOpacity: 0.5,
    shadowOffset : { width: 2, height: 2}
  },
  container: {
    flex: 1,
  },
  buttonIcon: {
    color: '#52307c',
    fontSize: 27,
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

export default MapScreen;