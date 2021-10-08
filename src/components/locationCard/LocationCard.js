import React from "react";
import { Text, View, FlatList } from "react-native"
import styles from "./LocationCardStyle"

const Jobs = ({ location }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{location.name}</Text>

        </View>
    );
};

export default Jobs;