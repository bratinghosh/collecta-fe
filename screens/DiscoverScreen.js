import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Body, Container, Header, Icon, Left, Right } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

import CollectCouponCard from '../components/CollectCouponCard';

const DiscoverScreen = (props) => {
  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <Left>
          <Button onPress={() => props.navigation.goBack()} transparent>
            <Icon type="AntDesign" name="arrowleft" style={styles.headerIcon} />
          </Button>
        </Left>
        <Body>
          <Text style={styles.screenName}>Discover</Text>
        </Body>
        <Right />
      </Header>
      <ScrollView>
        <CollectCouponCard />
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#ffffff'
  },
  headerIcon: {
    color: '#52307c',
    fontSize: 27,
  },
  screenName: {
    color: '#52307c',
    fontSize: 18
  }
});

export default DiscoverScreen;