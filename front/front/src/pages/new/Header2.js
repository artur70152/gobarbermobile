import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { View, ScrollView, Text } from "react-native";
import { SignLinkText, SignLink } from "../signin/styles";
import { useNavigation } from '@react-navigation/native';
import Button from '../../Components/button';
import { useDispatch } from 'react-redux';
import { signOut } from "../../store/modules/auth/actions";
import Background from '../../Components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
    
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, position: 'absolute', bottom: 0, left: 0 }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Icon name="event" size={30} color="#fff" style={styles.icon} />
          <SignLink onPress={() => navigation.navigate('SelectProvider')}>
            <SignLinkText style={styles.linkText}>Providers</SignLinkText>
          </SignLink>
        </View>

        <View style={styles.headerContainer}>
          <Icon name="event" size={30} color="#fff" style={styles.icon} />
          <SignLink onPress={() => navigation.navigate('SelectDateTime')}>
            <SignLinkText style={styles.linkText}>Select Date</SignLinkText>
          </SignLink>
        </View>

        <View style={styles.headerContainer}>
          <Icon name="person" size={30} color="#fff" style={styles.icon} />
          <SignLink onPress={() => navigation.navigate('Confirm')}>
            <SignLinkText style={styles.linkText}>Confirm</SignLinkText>
          </SignLink>
        </View>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 0,
    
    backgroundColor: '#8d41a8',
    width: 412,
    height: 80,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  marginBottom:-100
  },
  icon: {
    marginTop: -10,
    marginBottom: 5,
  },
  linkText: {
    color: '#fff',
    marginTop: -115,
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
  },
};