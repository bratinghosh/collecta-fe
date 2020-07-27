import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Container, Icon, View} from 'native-base';
import { Snackbar } from 'react-native-paper';
import MapView from 'react-native-maps';

const MapScreen = (props) => {
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  return (
    <Container style={styles.container}>
      <MapView provider={null} style={styles.map}>
      </MapView>
      <Button style={styles.menuButton} onPress={() => (props.navigation.openDrawer())}>
        <Icon type="FontAwesome" name="bars" style={styles.buttonIcon}/>
      </Button>
      <Button style={styles.cancelLocationButton} onPress={() => {}}>
        <Icon type="MaterialIcons" name="location-off" style={styles.buttonIcon}/>
      </Button>
      <Button style={styles.centerMapButton} onPress={() => {}}>
        <Icon type="FontAwesome5" name="crosshairs" style={styles.buttonIcon}/>
      </Button>
      <Snackbar action={{label: 'Show Me', onPress: () => {props.navigation.navigate('My Collection')}}} visible={snackbarVisible} onDismiss={() => {setSnackbarVisible(!snackbarVisible)}} style={styles.snackbar} duration={5000}>
        You have discovered a new Coupon!
      </Snackbar>
    </Container>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  },
  menuButton: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    top: 30,
    height: 60,
    justifyContent: 'center',
    position: 'absolute',
    left: 30,
    width: 60,
    shadowColor: '#52307c',
    shadowOpacity: 0.5,
    shadowOffset : { width: 4, height: 4},
    elevation: 5
  },
  centerMapButton: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    bottom: 50,
    height: 60,
    justifyContent: 'center',
    position: 'absolute',
    right: 30,
    width: 60,
    shadowColor: '#52307c',
    shadowOpacity: 0.5,
    shadowOffset : { width: 4, height: 4},
    elevation: 5
  },
  cancelLocationButton: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    bottom: 130,
    height: 60,
    justifyContent: 'center',
    position: 'absolute',
    right: 30,
    width: 60,
    shadowColor: '#52307c',
    shadowOpacity: 0.5,
    shadowOffset : { width: 4, height: 4},
    elevation: 5
  },
  container: {
    flex: 1
  },
  buttonIcon: {
    color: '#52307c',
    fontSize: 27
  },
  snackbar: {
    backgroundColor: '#52307c'
  }
});

export default MapScreen;