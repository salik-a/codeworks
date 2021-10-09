import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './ButtonStyle'

const Button = ({ text, onPress, iconName, right }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >

            {right ? (
                <View style={styles.row}>
                    <Text style={styles.title}>{text}</Text>
                    <Icon name={iconName} size={24} color={"white"} />
                </View>
            ) : (
                <View style={styles.row}>
                        <Icon name={iconName} size={24} color={"white"} />
                        <Text style={styles.title}>{text}</Text>
                    </View>
            )}


        </TouchableOpacity>
    );
};

export default Button;