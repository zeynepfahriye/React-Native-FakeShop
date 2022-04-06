import React from 'react'
import { FlatList } from "react-native";
import config from "../../../config";
import useFetch from "../../components/hooks/useFetch/useFetch";
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import ProductCard from "../../components/ProductCard/ProductCard";
const Product = ({ navigation }) => {
    const { error, loading, data } = useFetch(config.API_PRODUCT_URL);

    const handleChange = id => {
        navigation.navigate('DetailPage', { id })
    };

    const renderProduct = ({ item }) => (
        <ProductCard product={item} onSelect={() => handleChange(item.id)} />);
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }
    return (
        <FlatList
            data={data}
            renderItem={renderProduct}>
        </FlatList>
    )
}
export default Product;