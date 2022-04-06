import React from 'react';
import { SafeAreaView, Text, View, Image } from 'react-native';
import useFetch from '../../components/hooks/useFetch/useFetch';
import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';
import styles from './DetailStyle'
import config from '../../../config';
const Detail = ({ route }) => {
    const { id } = route.params;
    const { error, loading, data } = useFetch(`${config.API_PRODUCT_URL}/${id}`)
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }
    return (
        <View style={styles.container}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <View style={styles.body_container}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.price}>{data.price}TL</Text>

            </View>
        </View>

    )
}
export default Detail;
