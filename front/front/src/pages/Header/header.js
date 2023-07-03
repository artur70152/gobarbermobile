import React, {useState,useEffect}from 'react';
import { useSelector } from 'react-redux';
import { View, ScrollView, Text} from "react-native";
import {SignLinkText,SignLink} from "../signin/styles"
import { useNavigation } from '@react-navigation/native'
import Button from '../../Components/button';
import {useDispatch} from 'react-redux'
import { signOut } from "../../store/modules/auth/actions";
import Background from '../../Components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons'
export default function Header(){
    const navigation = useNavigation();

   // const signed=useSelector(state=>state.auth.signed)
//console.tron.log(signed)
//console.tron.log(token)





return (
  <View style={{ flex: 1, position: 'absolute', bottom: 0, left: 0 }}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 0,
        marginTop: 30,
        backgroundColor: '#8d41a8',
        width: 412,
        height: 80,

      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom:-100 }}>
        <Icon name="event" size={30} color="#fff" style={{ marginTop: -10, marginBottom: 5 }} />
        <SignLink onPress={() => navigation.navigate('Dashboard')}>
          <SignLinkText style={{ color: '#fff', marginTop: -115, marginLeft: 20, marginBottom: 5 }}>Agendamentos</SignLinkText>
        </SignLink>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom:-100 }}>
        <Icon name="add-circle-outline" size={30} color="#fff" style={{ marginTop: -10, marginBottom: 5 }} />
        <SignLink onPress={() => navigation.navigate('SelectProvider')}>
          <SignLinkText style={{ color: '#fff', marginTop: -115, marginLeft: 20, marginBottom: 5 }}>Select provider</SignLinkText>
        </SignLink>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',marginBottom:-100 }}>
        <Icon name="person" size={30} color="#fff" style={{ marginTop: -10, marginBottom: 5 }} />
        <SignLink onPress={() => navigation.navigate('Meu Perfil')}>
          <SignLinkText style={{ color: '#fff', marginTop: -115, marginRight: 20, marginBottom: 5 }}>Meu Perfil</SignLinkText>
        </SignLink>
      </View>
    </View>
  </View>
);
}