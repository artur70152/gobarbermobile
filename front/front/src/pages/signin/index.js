import React, {useRef, useState} from "react";
import {Container, Form, FormInput,SubmitButton,SignLink,SignLinkText} from './styles'
import { Image } from "react-native";
import Background from "../../Components/Background";
import logo from "../../assets/logo3.png"
import Input from "../../Components/input";
import Button from "../../Components/button";
import {useDispatch} from 'react-redux'
import { signinRequest } from "../../store/modules/auth/actions";
export default function Signin({navigation}){
const dispatch=useDispatch()
const [email,setemail]=useState('')
const [password,setpassword]=useState('')

    const passwordRef=useRef()

    function handleSubmit (){
dispatch(signinRequest(email,password))
        
    }
//tudo que esta dentro do input antes de fechar a tag sao propriedades
//essas propriedades tem funcionalidade em components/input
    return (
    <Background>
   <Container>

<Image source={logo} style={{width:200,height:200}}/>
<Form>
<FormInput icon="mail-outline"
keyboardType="email-address"
autoCorrect={false}
autoCaptalize="none"
placeholder="Digite seu email"
returnKeyType="next"
onSubmitEditing={()=>passwordRef.current.focus()}
value={email}
onChangeText={setemail}
/>

<FormInput icon="lock-outline"
secureTextEntry
placeholder="Digite sua senha"
ref={passwordRef}
returnKeyTipe="send"
onSubmitEditing={handleSubmit}
value={password}
onChangeText={setpassword}
/>
<SubmitButton onPress={handleSubmit}>
Acessar

</SubmitButton>
</Form>

<SignLink onPress={()=>navigation.navigate('User')}>
<SignLinkText>criar conta gratuita</SignLinkText>
</SignLink>


   </Container>
    </Background>
    
    )
}