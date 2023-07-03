import React,{useEffect,useState,useMemo} from "react";
import { View, StyleSheet, Button } from 'react-native';
import { formatRelative,parseISO } from "date-fns";
import pt from 'date-fns/locale/pt'
import { Container, Title, List } from '../../dashboard/styles';
import api from "../../../services/api";
import Background from '../../../Components/Background/index';
import {ProvidersList,Provider,Avatar,Name,Time,SubmitButton} from './styles';
import Header from "../Header2";
import { useNavigation,useRoute } from '@react-navigation/native';
import logo from '../../../assets/logo3.png';
import { SignLink } from "../../signin/styles";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from "react-native";


export default function SelectProvider() {
 

  const { params } = useRoute();
  const provider = params?.provider;
  const value = params?.value;
  console.log('params')
 console.log(params.value) 


    const navigation = useNavigation();






const dateFormatted=useMemo(
  ()=>formatRelative(parseISO(params.value),new Date(),{locale:pt}),
  [params.value]
  
    )
  

    

    async function handlepress(){

      await api.post('appointments',{
      provider_id:provider.id,
      date:params.value,
      })
      navigation.navigate('Dashboard')
      }


  return (
    <Background>
      <View style={styles.container}>
      <TouchableOpacity
        onPress={()=>{navigation.navigate('Dashboard')}}>
             <Icon name="chevron-left" size={20} color="#FFF" style={{top:20}}/>
      </TouchableOpacity>

        <Title style={{bottom:33}}>Confirmar agendamento</Title>

        <Avatar source={{uri:provider.avatar? provider.avatar.url:logo}}/>
<Name>{provider.name}</Name>
<Time>{dateFormatted}</Time>
        <SubmitButton onPress={handlepress}>
Confirmar agendamento

        </SubmitButton>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  headerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  buttonContainer: {
    position: 'absolute',
    top: 450,
    left: 20,
    right: 20,
  },
  flatlistcontainer: {
    width: '80%', // Defina a largura desejada aqui
    alignSelf: 'center',
  },
});