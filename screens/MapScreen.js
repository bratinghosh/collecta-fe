import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Container, Icon} from 'native-base';
import { Snackbar } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';
import RNLocation from 'react-native-location';

const MapScreen = (props) => {
  const _map = useRef(null);

  const [couponSnackbarVisible, setCouponSnackbarVisible] = useState(false);
  const [checkpointSnackbarVisible, setCheckpointSnackbarVisible] = useState(false);
  const [location, setLocation] = useState({latitude: 22.280535, longitude: 114.132016});

  // helper functions
  startUpdatingLocation = () => {
    locationSubscription = RNLocation.subscribeToLocationUpdates(
      locations => {
        setLocation(locations[0]);
      }
    );
  };

  stopUpdatingLocation = () => {
    locationSubscription && locationSubscription();
    setLocation(null);
  };

  centerUserLocation = () => {
    _map.current.animateToRegion(
      {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.009,
          longitudeDelta: 0.001,
      },
      1000
    );
  };

  // constructor
  useEffect(() => {
    RNLocation.configure({
      distanceFilter: 1.0,
      desiredAccuracy: {
        ios: "bestForNavigation",
        android: "highAccuracy"
      },
      // Android only
      androidProvider: "auto",
      interval: 500,
      fastestInterval: 1000,
      maxWaitTime: 500
    });
  }, []);

  // componentDidMount and componentDidUpdate
  useEffect(() => {
    RNLocation.requestPermission({
      ios: "whenInUse",
      android: {
        detail: "fine"
      }
    }).then(granted => {
      if (granted) {
        startUpdatingLocation();
      }
    });
  }, [location]);

  return (
    <Container style={styles.container}>
      <MapView ref={_map} provider={null} style={styles.map} showsCompass={false}>
        <Marker coordinate={{latitude: location.latitude, longitude: location.longitude}} title="My Location">
          <Icon type="FontAwesome5" name="male" style={{color: '#52307c'}}/>
        </Marker>
        {/* <Marker coordinate={{latitude: 22.287, longitude: 114.135}} title="Shop">
          <Icon type="MaterialIcons" name="location-on" style={{color: '#ff0000'}}/>
        </Marker>
        <Marker coordinate={{latitude: 22.284, longitude: 114.135}} title="Coupon">
          <Icon type="MaterialIcons" name="confirmation-number" style={{color: '#52307c'}}/>
        </Marker> */}
      </MapView>
      <Button style={styles.menuButton} onPress={() => (props.navigation.openDrawer())}>
        <Icon type="FontAwesome" name="bars" style={styles.buttonIcon}/>
      </Button>
      <Button style={styles.searchCouponButton} onPress={() => {setCheckpointSnackbarVisible(!checkpointSnackbarVisible)}}>
        <Icon type="Foundation" name="magnifying-glass" style={styles.buttonIcon}/>
      </Button>
      <Button style={styles.cancelLocationButton} onPress={() => {}}>
        <Icon type="MaterialIcons" name="location-off" style={styles.buttonIcon}/>
      </Button>
      <Button style={styles.centerMapButton} onPress={() => {centerUserLocation()}}>
        <Icon type="FontAwesome5" name="crosshairs" style={styles.buttonIcon}/>
      </Button>
      <Snackbar action={{label: 'Show Me', onPress: () => {props.navigation.navigate('My Collection')}}} visible={couponSnackbarVisible} onDismiss={() => {setCouponSnackbarVisible(!couponSnackbarVisible)}} style={styles.snackbar} duration={5000}>
        You have collected a new Coupon!
      </Snackbar>
      <Snackbar visible={checkpointSnackbarVisible} onDismiss={() => {setCheckpointSnackbarVisible(!checkpointSnackbarVisible)}} style={styles.snackbar} duration={5000}>
        New Coupons have been revealed near your location!
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
    bottom: 190,
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
  searchCouponButton: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    bottom: 120,
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