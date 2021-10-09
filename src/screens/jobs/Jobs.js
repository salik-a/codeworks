import React, { useState } from "react";
import { SafeAreaView, FlatList, View } from "react-native"
import styles from "./JobsStyle"
import JobsCard from "../../components/jobsCard/JobsCard"
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/loading/Loading"
import Error from "../../components/error/Error"
import Button from "../../components/button/Button";


const Jobs = ({ navigation }) => {
    const [page, setPage] = useState(1);

    const { loading, data, error } = useFetch(`https://www.themuse.com/api/public/jobs?page=${page}`)


    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }
    const handleSelect = (contents) => {
        navigation.navigate("JobDetails", contents)
    }
    const handleBack = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }
    const handleNext = () => {
        setPage(page + 1)
    }


    const renderItem = ({ item }) => (
        <JobsCard name={item.name} company={item.company.name} location={item.locations} level={item.levels} onPress={() => handleSelect(item.id)} />
    );

    return (
        <SafeAreaView style={styles.container}>

            <FlatList
                data={data.results}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
            />
            <View style={styles.buttons}>
                <Button text={"Previous"} iconName={"arrow-left-thick"} onPress={() => handleBack()} />
                <Button text={"Next"} iconName={"arrow-right-thick"} right={true} onPress={() => handleNext()} />
            </View>

        </SafeAreaView>
    );
};

export default Jobs;

