import React from "react";
import { FlatList, View } from "react-native";
import styles from "./Category.style";
import Config from "react-native-config";

import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

import CategoryCard from "../../components/Cards/CategoryCard";

const Category = ({navigation}) => {
    const handleCategorySelect = (name) => {navigation.navigate("MealsPage",{name})}
    const { loading, error, data } = useFetch(Config.API_URL);
    const renderCategory = ({ item }) => <CategoryCard category={item} onSelect={() => handleCategorySelect(item.strCategory)} />;

    if (loading) { return <Loading /> }
    if (error) { return <Error /> }

    return <FlatList style={styles.container} data={data.categories} renderItem={renderCategory} />;
}

export default Category;