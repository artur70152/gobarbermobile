import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
//DEV É UMA VARIAVEL GLOBAL DO REACT NATIVE QUE RETORNA TRUE 
//QUANDO O USUARIO EMULA A APLICAÇÃO DELE EM
// AMBIENTE DE DESENVOLVIMENTO
//TUDO QUE ESTIVER DENTRO DE DEV NÃO VAI ACONTECER EM AMBIENTE DE 
//PRODUÇÃO 
if(__DEV__){
const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
.configure({host:'192.168.0.19'})
.useReactNative()
.use(reactotronRedux())
.use(reactotronSaga()).connect()

tron.clear();
console.tron=tron
}