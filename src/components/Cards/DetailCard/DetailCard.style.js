import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BDBDBD",
    },
    inner_container: {
        backgroundColor: "white",
        padding:5,
        marginBottom: 2
    },
    image: {
        height: 300,
        width:  "100%",
    },
    title: {
        color: "#993430",
        fontSize: 24,
        fontWeight: "bold",
    },
    sub_title: {
        color: "#993430",
        fontSize: 20,
        fontWeight: "bold",
    },
    description: {
        fontSize: 15,
        marginTop: 5,
    },
    button: {
        marginBottom: 45,
        margin:30,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#EA3323",
    },
    path:{
        textAlign: "center",
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    }
});