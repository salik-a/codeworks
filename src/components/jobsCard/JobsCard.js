import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native"
import styles from "./JobsCardStyle"
import LocationCard from "../locationCard/LocationCard"
import Button from "../button/Button";


const Jobs = ({ name, company, location, level, onPress, button, onButtonPress }) => {

    const renderItem = ({ item }) => (
        <LocationCard location={item} />

    );

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.company}>{company}</Text>

            <FlatList style={styles.location}
                data={location}
                renderItem={renderItem}
                keyExtractor={item => item.index}
            />
            <Text style={styles.level}>{level[0].name}</Text>
            {button ? (
                <Button text={"REMOVE"} onPress={onButtonPress} iconName={"trash-can"} />
            ) : (null)}
        </TouchableOpacity>
    );
};

export default Jobs;