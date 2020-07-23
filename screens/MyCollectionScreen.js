import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { Button, Body, Container, Header, Icon, Left, Right } from 'native-base';

import RedeemCouponCard from '../components/RedeemCouponCard';

const MyCollectionScreen = ({navigation}) => {
  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <Left>
          <Button onPress={() => (navigation.openDrawer())} transparent>
            <Icon type="FontAwesome" name="bars" style={styles.headerIcon} />
          </Button>
        </Left>
        <Body>
          <Text style={styles.screenName}>My Collection</Text>
        </Body>
        <Right />
      </Header>
      <ScrollView>
        <RedeemCouponCard />
      </ScrollView>
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

export default MyCollectionScreen;