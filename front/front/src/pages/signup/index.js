import React, {useRef, useState} from "react";
import {Container, Form, FormInput,SubmitButton,SignLink,SignLinkText} from './styles'
import { Image } from "react-native";
import Background from "../../Components/Background";
import logo from "../../assets/logo3.png"
import { useDispatch } from "react-redux";
import { signUpRequest } from "../../store/modules/auth/actions";
import Input from "../../Components/input";
import Button from "../../Components/button";
export default function SignUp({navigation}){
    const[name,setname]=useState('');
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');


const emailRef=useRef();
const passwordRef=useRef();
const dispatch=useDispatch()


function handleSubmit(){
dispatch(signUpRequest(name, email, password))

}
//tudo que esta dentro do input antes de fechar a tag sao propriedades
//essas propriedades tem funcionalidade em components/input
    return (
    <Background>
   <Container>

<Image source={logo} style={{width:200,height:200}}/>
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
criar conta gratuita

</SubmitButton>
</Form>


<SignLink onPress={()=>navigation.navigate('Signin')}>
<SignLinkText>ja tenho conta</SignLinkText>
</SignLink>


   </Container>
    </Background>
    
    )
}