import React from "react";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import DetailCard from "../../components/Cards/DetailCard";

import Loading from "../../components/Loading";
import Error from "../../components/Error";



const Detail = ({route}) => {

    const {id} = route.params;
    const {loading, error, data} = useFetch(Config.DET_URL + id);

    if (loading) { return <Loading />; }
    if (error) { return <Error />; }

    return <DetailCard detail={data.meals[0]} />;
}

export default Detail;