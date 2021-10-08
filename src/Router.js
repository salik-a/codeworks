// In App.js in a new project


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import  Drawer  from './navigation/drawer';


const Router = () => {
  
    return (
            <NavigationContainer>
                <Drawer />
            </NavigationContainer>
    );
};

export default Router;