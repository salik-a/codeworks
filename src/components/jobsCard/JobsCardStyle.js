import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 6,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "gray",
        margin: 10,
        borderRadius: 10
    },
    location: {
        flexDirection: "row"
    },
    name: {
        fontWeight: "bold",
        fontSize: 20,

    },
    company: {
        fontSize: 18,
        marginVertical: 10
    },
    level: {
        color: "red",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: 'right', alignSelf: 'stretch'
    }

});