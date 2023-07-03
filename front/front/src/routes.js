import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signin from './pages/signin';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';
import SelectDateTime from './pages/new/SelectDateTime';
import SelectProvider from './pages/new/SelectProvider';
import Confirm from './pages/new/Confirm';

import Agendamentos from './pages/Agendamentos';
import Perfil from './pages/MeuPerfil';

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Signin" component={Signin}  options={{ headerShown: false }}/>
    <Stack.Screen name="User" component={SignUp}  options={{ headerShown: false }}/>
  </Stack.Navigator>
);

const AppStack = () => (
  <Stack.Navigator>
    
    <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
    <Stack.Screen name="SelectProvider" component={SelectProvider} options={{ headerShown: false }} />
    <Stack.Screen name="SelectDateTime" component={SelectDateTime} options={{ headerShown: false }} />
    <Stack.Screen name="Confirm" component={Confirm} options={{ headerShown: false }} />

    
    <Stack.Screen name="Meu Perfil" component={Perfil}  options={{ headerShown: false }}/>

  </Stack.Navigator>
);

const AppNavigator = ({signedIn}) => (
  <NavigationContainer>
    <Stack.Navigator>
      {signedIn===true ? (
        <Stack.Screen
          name="App"
          component={AppStack}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;