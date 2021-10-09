// In App.js in a new project


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  Drawer  from './navigation/drawer';
import UserProvider from './context/provider';
import Toast from 'react-native-toast-message';

const Router = () => {
  
    return (
        <UserProvider>
            <NavigationContainer>
                <Drawer />
            </NavigationContainer>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </UserProvider>
    );
};

export default Router;