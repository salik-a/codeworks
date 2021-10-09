import React from "react";
import { Text, View, FlatList } from "react-native"
import { useSelector } from "react-redux";
import JobsCard from "../../components/jobsCard/JobsCard"
import styles from "./FavoritedJobsStyle"
import { useDispatch } from "react-redux";

const FavoritedJobs = ({ navigation }) => {
    const list = useSelector(selector => selector.favorites);
    const dispatch = useDispatch()
    const renderItem = ({ item }) => (
        <JobsCard name={item.name} company={item.company.name} location={item.locations} level={item.levels} onPress={() => handleSelect(item.id)} button={true} onButtonPress={() => handleRemoveFavorites(item)} />
    );
    const handleRemoveFavorites = (item) => {
        dispatch({ type: "REMOVE_FAVORITES", payload: { job: item } })
    }

    const handleSelect = (contents) => {
        navigation.navigate("JobDetails", contents)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
            />
        </View>
    );
};

export default FavoritedJobs;