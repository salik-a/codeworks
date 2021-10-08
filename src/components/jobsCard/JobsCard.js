import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native"
import styles from "./JobsCardStyle"
import LocationCard from "../locationCard/LocationCard"



const Jobs = ({ name, company, location, level }) => {

    const renderItem = ({ item }) => (
        <LocationCard location={item} />

    );

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.company}>{company}</Text>

            <FlatList style={styles.location}
                data={location}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Text style={styles.level}>{level[0].name}</Text>

        </TouchableOpacity>
    );
};

export default Jobs;