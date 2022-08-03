import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        margin: 5,
        paddingStart: 30,
        backgroundColor: "white",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopStartRadius: 60,
        borderBottomStartRadius: 60,
        borderWidth: 3,
        borderColor: "#BDADA5",
    },
    body_container: {
        justifyContent: "center",
        marginLeft: 10,
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: "contain",
        borderRadius: 50,
    },
    title: {
        fontSize: 18,
    },
});