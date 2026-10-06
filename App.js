import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from './screens/Login'
import Cadastro from './screens/Cadastro'
import Home from './screens/Home'
import Notificacoes from './screens/Notificacoes'
import Perfil from './screens/Perfil'

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Notificacoes"
          component={Notificacoes}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}