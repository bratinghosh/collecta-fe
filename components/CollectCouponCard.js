import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Button, Body, Card, CardItem} from 'native-base';

const CollectCouponCard = () => {
  return (
    <Card style={styles.couponCard}>
      <CardItem>
        <Body>
          <Image source={require('../assets/images/example_coupon.png')} style={styles.couponImage} />
          <Button style={styles.collectButton} onPress={() => {}} rounded bordered>
            <Text style={styles.collectText}>Add to Collection</Text>
          </Button>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  couponCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  couponImage: {
    alignSelf: 'center',
    height: Dimensions.get('window').width * 0.95 * 0.5,
    width: Dimensions.get('window').width * 0.95,
    marginBottom: 10
  },
  collectButton: {
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#52307c',
    width: Dimensions.get('window').width * 0.95,
    height: 50,
    justifyContent: 'center'
  },
  collectText: {
    color: '#52307c',
    fontSize: 20,
    fontWeight: '600',
    width: Dimensions.get('window').width * 0.95,
    textAlign: 'center'
  }
});

export default CollectCouponCard;