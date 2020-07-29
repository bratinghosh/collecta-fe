import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Body, Container, Header, Icon, Left, Right } from 'native-base';

import SettingsContent from '../components/SettingsContent';
import { ScrollView } from 'react-native-gesture-handler';

const SettingsScreen = (props) => {
  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <Left>
          <Button onPress={() => props.navigation.goBack()} transparent>
            <Icon type="AntDesign" name="arrowleft" style={styles.headerIcon} />
          </Button>
        </Left>
        <Body>
          <Text style={styles.screenName}>Settings</Text>
        </Body>
        <Right/>
      </Header>
      <ScrollView>
        <SettingsContent />
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
    fontSize: 18
  }
});

export default SettingsScreen;