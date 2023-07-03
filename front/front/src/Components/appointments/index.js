import React, { useMemo } from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { View, StyleSheet,  SafeAreaView, } from 'react-native';


import { Container, Left, Avatar, Info, Name, Time } from './styles';
//import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/logo3.png';

export default function Appointment({ data,onCancel}) {
    
      
  const dateParsed = useMemo(() => {
    return formatDistanceToNow(parseISO(data.date),new Date(), {
      locale: ptBR,
      addSuffix: true,
    });
  },[data.date]);

//console.log(data.provider.avatar.url)

 
  const lag = data.provider.avatar.url ? { uri: data.provider.avatar.url } : logo;
  console.log(data.provider.avatar.url)
  
// source={require('./myButton.png')}

  return (
    <Container past={data.past}>
      <Left>
        <Avatar source={lag} />
        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParsed}</Time>
        </Info>

      </Left>
      
      {data.cancelable && !data.canceled_at &&(
        <TouchableOpacity
        onPress={onCancel}>
             <Icon name="event-busy" size={30} color="#fc4675" />
      </TouchableOpacity>
      
       
        
      
      )}
      

      
    </Container>
  );


  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 36,
  },

});
