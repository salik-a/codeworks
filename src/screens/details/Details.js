import React from "react";
import { Text, View, FlatList, ScrollView } from "react-native"
import styles from "./DetailsStyle"
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/loading/Loading"
import Error from "../../components/error/Error"
import HTMLView from 'react-native-htmlview';
import Button from "../../components/button/Button";

const Details = ({ route }) => {
    const id = route.params;

    const { loading, data, error } = useFetch(`https://www.themuse.com/api/public/jobs/${id}`);
    console.log(data)

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
                <Button text={"Submit"} iconName={"logout"} />
                <Button text={"Favorite Job"} iconName={"heart"} />
            </View>

        </View>
    );
};

export default Details;