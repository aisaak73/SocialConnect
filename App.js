import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Provider as PaperProvider} from "react-native-paper";
import theme from './src/themes';
import Navigation from './src/components/navigation';
import {Provider as AuthProvider} from "./src/providers/AuthContext";
import {Provider as NoteProvider} from "./src/providers/NoteContext"

export default function App() {
  return (
    <NoteProvider>
      <AuthProvider>
      <PaperProvider theme={theme}>
       <Navigation/>
      </PaperProvider>
    </AuthProvider>
    </NoteProvider>
  );
}

