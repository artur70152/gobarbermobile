import React,{useEffect,useState} from "react";
import { View, StyleSheet, Button } from 'react-native';
import { Container, Title, List } from '../../dashboard/styles';
import api from "../../../services/api";
import Background from '../../../Components/Background/index';
import {ProvidersList,Provider,Avatar,Name} from './styles';
import Header from "../Header2";
import { useNavigation } from '@react-navigation/native';
import logo from '../../../assets/logo3.png';
import { SignLink } from "../../signin/styles";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from "react-native";


export default function SelectProvider() {

    const navigation = useNavigation();
    const [providers, setproviders] = useState([]);

    useEffect(() => {
   
      async function loadproviders() {
  
  
        
        const response = await api.get('providers');
        
        console.log(response)
        setproviders(response.data);
      }
      loadproviders();
    }, []);


//como nao estamos renderizando o componente SelectDateTime nessa tela igual fizemos com Appointments em Dashboard,
//precisamos passar os parametros {provider} dentro da rota usando o navigate e no arquivo SelectDateTime extrai-los
//usando o useRoot()



  return (
    <Background>
      <View style={styles.container}>
      <TouchableOpacity
        onPress={()=>{navigation.navigate('Dashboard')}}>
             <Icon name="chevron-left" size={20} color="#FFF" style={{top:20}}/>
      </TouchableOpacity>

        <Title style={{bottom:33}}>Selecione o Prestador</Title>


<ProvidersList
data={providers}
keyExtractor={provider=>String(provider.id)}
renderItem={({item:provider})=>(
<Provider onPress={() => navigation.navigate('SelectDateTime',{provider})} >
 
<Avatar source={{uri:provider.avatar? provider.avatar.url:logo}}/>
<Name>{provider.name}</Name>

</Provider>



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