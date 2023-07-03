import React, {useState}from 'react';
import { useSelector } from 'react-redux';
import AppNavigator from './routes';

export default function App(){

const signed=useSelector(state=>state.auth.signed)


console.log(signed)


  // const Routes=AppNavigator({ signedIn: signed })


//console.log(Routes)
return(
    <AppNavigator signedIn={signed} />
)

}