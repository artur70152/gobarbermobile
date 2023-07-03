import React, {useState,useEffect, useRef}from 'react';
import { useSelector } from 'react-redux';
import { View, Text,TouchableOpacity,ScrollView,StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native'
import Button from '../../Components/button';
import {useDispatch} from 'react-redux'
import { signOut } from "../../store/modules/auth/actions";
import Header from '../Header/header';
import Background from '../../Components/Background';
import { Container,Title,Form,FormInput,SubmitButton,Separator } from './styles';
import { Updateprofilerequest } from '../../store/user/actions';
//import { Updateprofilerequest } from '../../store/modules/auth/actions';

export default function Perfil(){

const profile=useSelector(state=>state.user.profile)
console.log('profile do myprofile')
console.log(profile)

const emailRef=useRef()
const oldPasswordRef=useRef()
const passwordRef=useRef()
const confirmPasswordRef=useRef()


const [name,setname]=useState(profile.name)
const [email,setemail]=useState(profile.email)
const [oldPassword,setOldPassword]=useState('')
const [password,setpassword]=useState('')
const [confirmPassword,setConfirmPassword]=useState('')


  const dispatch = useDispatch();
  function handleSubmit() {
    dispatch(signOut());
  }

  function handleSubmitb(){
    console.log(name)
dispatch(Updateprofilerequest({
name,
email,
password,
oldPassword,
confirmPassword,

}))

  }

useEffect(()=>{
setOldPassword('')
setConfirmPassword('')
setpassword('')
},[profile])









return(
    <Background>
      <Container>
        <Title>Meu Perfil</Title>


        
        <Form>
        <FormInput icon="person-outline"
autoCorrect={false}
autoCaptalize="none"
placeholder="Nome Completo"
returnKeyType="next"
onSubmitEditing={()=>emailRef.current.focus()}
value={name}
onChangeText={setname}
/>

<FormInput icon="mail-outline"
keyboardType="email-address"
autoCorrect={false}
autoCaptalize="none"
placeholder="Digite seu email"
ref={emailRef}
returnKeyType="next"
onSubmitEditing={()=>oldPasswordRef.current.focus()}
value={email}
onChangeText={setemail}
/>
<Separator/>

<FormInput icon="lock-outline"
secureTextEntry
placeholder="Digite sua senha atual"
ref={oldPasswordRef}
returnKeyType="next"
onSubmitEditing={()=>passwordRef.current.focus()}
value={oldPassword}
onChangeText={setOldPassword}
/>
<FormInput icon="lock-outline"
secureTextEntry
placeholder="Digite sua nova senha"
ref={passwordRef}
returnKeyType="next"
onSubmitEditing={()=>confirmPasswordRef.current.focus()}
value={password}
onChangeText={setpassword}
/>

<FormInput icon="lock-outline"
secureTextEntry
placeholder="confirmação de senha"
ref={confirmPasswordRef}
returnKeyTipe="send"

value={confirmPassword}
onChangeText={setConfirmPassword}
/>

<SubmitButton onPress={handleSubmitb}>
atualizar perfil

</SubmitButton>
<Separator/>
<Button onPress={handleSubmit} style={{backgroundColor:'#f64c75'}}>Log Out</Button>
        </Form>
    <ScrollView style={{flexGrow: 1,paddingBottom: 80, }} >
      
    


       



  
      </ScrollView>
      <View>
      <Header  />
      </View>
      </Container>
  </Background>
)

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,

  },
 
  flatlistcontainer: {
    width: '80%', // Defina a largura desejada aqui
    alignSelf: 'center',
  },
});