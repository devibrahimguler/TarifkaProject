import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./MealsCard.style";

const MealsCard = ({ meal, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
                <View style={styles.body_container} />
                <View style={styles.inner_container}>
                    <Text style={styles.title} numberOfLines={1} >{meal.strMeal}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default MealsCard;