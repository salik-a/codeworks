import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Jobs from '../screens/jobs/Jobs';
import JobDetails from '../screens/details/Details';

const Stack = createStackNavigator();

const StackNavigator=() => {
    return (
       
            <Stack.Navigator>
                <Stack.Screen name="Jobs" component={Jobs} />
            <Stack.Screen name="JobDetails" component={JobDetails} />
            </Stack.Navigator>
        
    );
}

export default StackNavigator;