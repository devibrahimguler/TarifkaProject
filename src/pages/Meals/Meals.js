import React from "react";
import { FlatList } from "react-native";
import styles from "./Meals.style";
import Config from "react-native-config";

import useFetch from "../../hooks/useFetch";
import MealsCard from "../../components/Cards/MealsCard";

import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Meals = ({navigation,route}) => {
    const {name} = route.params;
    
    const handleMealSelect = (id) => {navigation.navigate("DetailPage",{id})};
    const {loading, error, data} = useFetch(Config.MEA_URL + name);
    const renderMeals = ({item}) => <MealsCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />;

    if (loading) { return <Loading />; }
    if (error) { return <Error />; }

    return <FlatList style={styles.container} data={data.meals} renderItem={renderMeals} />;
}

export default Meals;