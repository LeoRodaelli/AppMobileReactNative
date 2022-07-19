import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from './src/styles/theme';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  ////fontsloaded é verdadeiro?  se for vdd carrega a tela login, caso contrario carrega o componente de signin -> if ternario
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      { fontsLoaded ? <Home /> : <Loading />}
    </NativeBaseProvider>   
  );
}

