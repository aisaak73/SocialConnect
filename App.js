import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider as PaperProvider} from "react-native-paper";
import theme from './src/themes';
import Navigation from './src/components/navigation';
import {Provider as AuthProvider} from "./src/providers/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
       <Navigation/>
      </PaperProvider>
    </AuthProvider>
  );
}

