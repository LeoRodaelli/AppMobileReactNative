//definir quais rotas serão exibidas, se o user estiver conectado mostra as rotas da AppRoutes, se não mostra a dde SignIn
import { NavigationContainer } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { SignIn } from "../screens/SignIn";
import { AppRoutes } from "./app.routes";
import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";


export function Routes() {

    //useState armazenar estados - variaveis especiais, poder de gerar uma nova renderização na interface
    // useEffect quando quer aplicar alguma lógica pra ser executada assim que a interface ser renderizada
    const [loading, setIsLoading] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User>();

    //verificando se o usuario esta autenticado
    useEffect(() => {
        const subscriber = auth()
        .onAuthStateChanged(response => {
            setUser(response);
            setIsLoading(false);
        });

        return subscriber;
    }, []);

    if (loading) {
        return <Loading />
    }

    //autenticação
    return (
        <NavigationContainer>
            {user ? <AppRoutes /> : <SignIn />}
        </NavigationContainer>
    )
}