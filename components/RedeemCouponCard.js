import React, { useState } from 'react';
import { Dimensions, Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Body, Card, CardItem, Icon} from 'native-base';

const RedeemCouponCard = () => {
  const [couponRedeemModalState, setCouponRedeemModalState] = useState(false);

  return (
    <Card style={styles.couponCard}>
        <Modal transparent={true} visible={couponRedeemModalState} animationType="fade" onRequestClose={() => {}}>
          <SafeAreaView>
            <View style={styles.redeemModalOuterView}>
              <View style={styles.redeemModalInnerView}>
                <Button style={styles.closeButton} onPress={() => setCouponRedeemModalState(false)} transparent>
                  <Icon type="FontAwesome" name="close" style={styles.closeIcon}/>
                </Button>
                <ScrollView style={styles.couponModalView}>
                  <Text style={styles.couponTitle}>
                    Coupon Title
                  </Text>
                  <Text style={styles.couponExpiryDate}>
                    Expiry Date: DD/MM/YYYY
                  </Text>
                  <Text style={styles.couponCompany}>
                    Company Name
                  </Text>
                  <Text style={styles.couponDescription}>
                    Coupon Description
                  </Text>
                <Image source={require('../assets/images/example_qr_code.png')} style={styles.couponQRCode}/>
                </ScrollView>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      <CardItem>
        <Body>
          <Image source={require('../assets/images/example_coupon.png')} style={styles.couponImage} />
          <View style={styles.buttonsContainer}>
            <Button style={styles.redeemButton} onPress={() => setCouponRedeemModalState(true)} rounded bordered>
              <Text style={styles.redeemText}>Redeem</Text>
            </Button>
            <Button style={styles.locationButton} onPress={() => {}} bordered>
              <Icon type="FontAwesome" name="location-arrow" style={styles.locationIcon} />
            </Button>
          </View>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width * 0.95
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  couponCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeIcon: {
    color: '#52307c'
  },
  couponImage: {
    alignSelf: 'center',
    height: Dimensions.get('window').width * 0.95 * 0.5,
    width: Dimensions.get('window').width * 0.95,
    marginBottom: 10
  },
  couponModalView: {
    padding: 20
  },
  couponTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10
  },
  couponDescription: {
    marginBottom: 50
  },
  couponCompany: {
    marginBottom: 10
  },
  couponExpiryDate: {
    color: '#ff0000',
    marginBottom: 10
  },
  couponQRCode: {
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.95 * 0.7,
    height: Dimensions.get('window').width * 0.95 * 0.7,
    marginBottom: 150
  },
  locationButton: {
    backgroundColor: '#ffffff',
    borderColor: '#52307c',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center'
  },
  locationIcon: {
    fontSize: 21,
    color: '#52307c'
  },
  redeemButton: {
    backgroundColor: '#ffffff',
    borderColor: '#52307c',
    width: Dimensions.get('window').width * 0.95 * 0.8,
    height: 50,
    justifyContent: 'center'
  },
  redeemText: {
    color: '#52307c',
    fontSize: 20,
    fontWeight: '600',
    width: Dimensions.get('window').width * 0.95 * 0.8,
    textAlign: 'center'
  },
  redeemModalOuterView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  redeemModalInnerView: {
    marginHorizontal: 5,
    marginVertical: 30,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center'
  }
});

export default RedeemCouponCard;