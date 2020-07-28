import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Container, Icon} from 'native-base';
import { Snackbar } from 'react-native-paper';
import MapView, { Marker, Circle } from 'react-native-maps';

const MapScreen = (props) => {
  const [couponSnackbarVisible, setCouponSnackbarVisible] = useState(false);
  const [checkpointSnackbarVisible, setCheckpointSnackbarVisible] = useState(false);

  return (
    <Container style={styles.container}>
      <MapView provider={null} style={styles.map} showsUserLocation={true} showsCompass={false}>
        {/* {<Marker coordinate={{latitude: 22.28, longitude: 114.13}} title="Checkpoint">
          <Icon type="FontAwesome5" name="search-location" style={{color: '#52307c'}}/>
        </Marker>
        <Marker coordinate={{latitude: 22.287, longitude: 114.135}} title="Shop">
          <Icon type="MaterialIcons" name="location-on" style={{color: '#ff0000'}}/>
        </Marker>
        <Circle center={{latitude: 22.285, longitude: 114.133}} radius={75} strokeColor="#52307c33" fillColor="#52307c33"/>
        <Circle center={{latitude: 22.285, longitude: 114.134}} radius={75} strokeColor="#52307c33" fillColor="#52307c33"/>
        <Circle center={{latitude: 22.282, longitude: 114.134}} radius={75} strokeColor="#52307c33" fillColor="#52307c33"/>} */}
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
      <Snackbar action={{label: 'Show Me', onPress: () => {props.navigation.navigate('My Collection')}}} visible={couponSnackbarVisible} onDismiss={() => {setCouponSnackbarVisible(!couponSnackbarVisible)}} style={styles.snackbar} duration={5000}>
        You have discovered a new Coupon!
      </Snackbar>
      <Snackbar visible={checkpointSnackbarVisible} onDismiss={() => {setCheckpointSnackbarVisible(!checkpointSnackbarVisible)}} style={styles.snackbar} duration={5000}>
        You have reached a Checkpoint!
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