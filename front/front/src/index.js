
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig'

//A propriedade children é uma propriedade especial em React que é 
//passada para os componentes e contém o conteúdo entre as tags de 
//abertura e fechamento de um componente. Essa propriedade permite que 
//os componentes sejam compostos e aceitem conteúdo dinâmico.
//import './config/ReactotronConfig'
import App from './App';
import {store, persistor} from '../src/store/index'
//const styles=StyleSheet.create({
//container:{
  //flex:1,
  //justifyContent:'center',
  //alignItems:'center',
  //backgroundColor:'#f5fcff',
//},
//welcome:{
  //fontSize:20,
  //textAlign:'center',
  //margin:10,
//}
//})
export default function Index(){



  
return(
  <>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
  <GestureHandlerRootView style={{flex:1}}>
  <StatusBar barStyle='light-content' backgroundColor='#7159c1'/>
 <App />
 </GestureHandlerRootView>
 </PersistGate>
 </Provider>
 </>
)

}