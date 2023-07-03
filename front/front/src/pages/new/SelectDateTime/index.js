import React,{useEffect,useState} from "react";
import { View, StyleSheet, Button } from 'react-native';
//import { Container, Title, List } from '../../dashboard/styles';
import api from "../../../services/api";
import Background from '../../../Components/Background/index';
import {ProvidersList,Provider,Avatar,Name} from './styles';
import Header from "../Header2";
import { useNavigation,useRoute  } from '@react-navigation/native';
import logo from '../../../assets/logo3.png';
import { SignLink } from "../../signin/styles";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container,HourList,Hour,Title} from './styles'
import { TouchableOpacity } from "react-native";
import Datetimeinput from '../../../Components/datetimeinput/index.android'


export default function SelectDateTime() {
    
const [date,setdate]=useState(new Date())
const [hours,sethours]=useState([])
    const navigation = useNavigation();
   
    const { params } = useRoute();
    const provider = params?.provider;
console.log(provider)
useEffect(()=>{
async function loadAvailable(){
const response=await api.get(`providers/${provider.id}/available`,{params:{
date:date.getTime(),

}})
console.log(response)
sethours(response.data)
}
loadAvailable()
},[date,provider.id])
    
function handleselecthour(value){
navigation.navigate('Confirm',{
    provider,value,
})

}




  return (
    <Background>
    
      <View style={styles.container}>
      <TouchableOpacity
        onPress={()=>{navigation.navigate('SelectProvider')}}>
             <Icon name="chevron-left" size={20} color="#FFF" style={{top:20}}/>
      </TouchableOpacity>

        <Title style={{bottom:0, left:150}}>Selecione a data</Title>
<Datetimeinput date={date} onChange={setdate}/>
<HourList
data={hours}
keyExtractor={item=>item.time}
renderItem={({item})=>(
<Hour onPress={()=>handleselecthour(item.value)}enabled={item.available}>
<Title>{item.time}</Title>


</Hour>
)}
/>

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