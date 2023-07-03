import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';
import {Alert} from 'react-native'
import { useSelector } from 'react-redux';

import { signFailure, signinSuccess } from './actions';
import { Updateprofilesuccess } from '../../user/actions';
//import { Updateprofilesuccess } from './actions';

import AsyncStorage from '@react-native-community/async-storage';
import { useEffect } from 'react';
import { store } from '../../index';

export  function* Singin({ payload }) {

  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
   //name:'artur',
    email,
    password,
    
  });



  const { token, user } = response.data;
  
 console.tron.log(response.data)
  console.tron.log(token)
  //AsyncStorage.setItem("user",response.data.user);
  if (user.provider) {
    Alert.alert('erro no login', 'usuario não pode ser prestador de serviços ')
    return;
  }

 

//console.log(api.defaults.headers)

  yield put(signinSuccess(token, user));
 
 // history.push('/dashboard');
  //history.go('/dashboard');

  AsyncStorage.setItem("token",token);
  //AsyncStorage.setItem("user",user);

  //Alert.alert('erro no de autenticação ', 'houve um erro de autenticação  ')
  //yield put(signFailure());



}
export function* Signupd({payload}){
 
  try{
//console.log(payload)
const{name,email,password}=payload
const responsea=yield call(api.post, 'users',{
name,
email,
password,

})
//console.log(responsea)
//history.push('/');
//history.go('/');

//createRoot(document.getElementById('root')).render()
  }catch(err){
    Alert.alert('falha no cadastro ', 'verifique seus dados ')
    yield put(signFailure())
  }
}
export function signOut(){
 // history.push('/')
  //history.go('/')
}
export function setToken({payload}){
if(!payload) return;

const{token}=payload.auth;
console.tron.log(payload.auth)
if(token){
  api.defaults.headers.Authorization=`Bearer ${token}`
}

}
export function* UpdateProfile({ payload} ){
  console.log('payload.data')
console.log(payload.data)
//console.log(payload.payload.data)

  const {name,email, ...rest}=payload.data;
  
  //console.log(payload.payload.data)
  
  const profile = {
    name,
    email,
    ...(rest.oldPassword ? rest : {}),
  };


  console.log('profile')
  console.log(profile)

  const response= yield call(api.put, 'users', profile)
  
  console.log('response.data')
 console.log(response.data)

  


  yield put(Updateprofilesuccess(response.data)) 
  //console.log(payload.payload.data.name)
  //console.log(response.data)

  }
   
  


export default all([

takeLatest('@auth/SIGN_IN_REQUEST', Singin),
takeLatest('persist/REHYDRATE',setToken),
takeLatest('@auth/SIGN_UP_REQUEST', Signupd),
takeLatest('@auth/SIGN_OUT', signOut),
takeLatest('@user/UPDATE_PROFILE_REQUEST',UpdateProfile),


]);