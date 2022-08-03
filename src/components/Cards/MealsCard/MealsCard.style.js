import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,

    },
    body_container: {
        flex: 1,
        position: "absolute",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        backgroundColor: "black",
        opacity:0.4,
        top: 150,
        left: 0,
        right: 0,
        bottom: 0,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    inner_container: {
        position: "absolute",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        padding: 10,
        top: 150,
        left: 0,
        right: 0,
        bottom: 0,
    },
    image: {
        height: 200,
        width: "100%",
        borderRadius: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "white",
        opacity: 1,
    },
});