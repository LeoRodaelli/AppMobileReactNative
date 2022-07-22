// as rotas de qnd o user está dentro da aplicação, 
//estrategia de separar as rotas do app (por acesso, por perfil de usuario)
//rotas disponiveis se o user nao ta logado, que é só a tela de login, e quando estiver logado, todas as interfaces da app, menos a de login
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { Register } from '../screens/Register';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />
            <Screen name="new" component={Register} />
            <Screen name="details" component={Details} />
        </Navigator>
    )
}












