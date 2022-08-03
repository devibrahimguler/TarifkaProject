import React from "react";
import { Text, Image, ScrollView, View, TouchableOpacity, Linking, Alert } from "react-native";
import styles from "./DetailCard.style";

const DetailCard = ({ detail }) => {
    function toYoutube() {
        Linking.canOpenURL(detail.strYoutube).then(supported => {
            if (supported) {
                Linking.openURL(detail.strYoutube);
            } else {
                Alert.alert("Wrong", "This link is wrong");
            }
        });

    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
            <Image style={styles.image} source={{ uri: detail.strMealThumb }} />
            <View style={styles.inner_container}>
                <Text style={styles.title} >{detail.strMeal}</Text>
                <Text style={styles.sub_title} >{detail.strArea}</Text>
            </View>
            <View style={styles.inner_container}>
                <Text style={styles.description} >{detail.strInstructions}</Text>
                <TouchableOpacity style={styles.button} onPress={toYoutube}>
                    <Text style={styles.path} >Watch on Youtube</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default DetailCard;