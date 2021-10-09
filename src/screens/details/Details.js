import React, { useState } from "react";
import { Text, View, FlatList, ScrollView } from "react-native"
import styles from "./DetailsStyle"
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/loading/Loading"
import Error from "../../components/error/Error"
import HTMLView from 'react-native-htmlview';
import Button from "../../components/button/Button";
import { useDispatch } from "react-redux";
import Toast from 'react-native-toast-message';


const Details = ({ route }) => {

    const dispatch = useDispatch()
    const { loading, data, error } = useFetch(`https://www.themuse.com/api/public/jobs/${route.params}`);

    const handleAddFavorites = async () => {

        dispatch({ type: "ADD_FAVORITES", payload: { data } })
        Toast.show({
            type: 'success',
            text1: 'FAVORITE SUCCESS',
            text2: 'This job added to favorites.'
        });
    }
    const handleSubmit = () => {

        Toast.show({
            type: 'success',
            text1: 'SUBMIT SUCCESS',
            text2: 'Application sent.'
        });
    }

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }


    return (
        <View style={styles.container}>
            <Text style={styles.name}>{data.name}</Text>
            <View style={styles.row}>
                <Text style={styles.red}>Locations:</Text>
                <Text style={styles.location}>{data.locations[0].name}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.red}>Job Level:</Text>
                <Text style={styles.level}>{data.levels[0].name}</Text>
            </View>
            <View style={styles.detailHeader}>
                <Text style={styles.detail}>Job Detail</Text>
            </View>
            <ScrollView style={styles.text}>
                <HTMLView
                    value={data.contents}
                    stylesheet={styles.html}
                />
            </ScrollView>
            <View style={styles.buttons}>
                <Button text={"Submit"} iconName={"logout"} onPress={handleSubmit} />
                <Button text={"Favorite Job"} iconName={"heart"} onPress={handleAddFavorites} />
            </View>

        </View>
    );
};

export default Details;