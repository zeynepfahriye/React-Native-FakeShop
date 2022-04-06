import React from 'react';
import { SafeAreaView, View, Image, Alert } from 'react-native';
import { Formik } from 'formik'
import Button from '../../components/Button/Button';
import Input from '../../components/Input';
import styles from './LoginStyle'
import config2 from '../../../config2';
import UsePost from '../../components/hooks/usePost/UsePost';
const Login = ({ navigation }) => {

    const { data, loading, error, post } = UsePost();

    async function handleLogin(values) {
        await post(config2.API_AUTH_URL, values);
    }
    if (error) {
        Alert.alert('Fake Shop', 'Hata oluştu')
    }
    if (data) {
        if (data.status === 'Error') {
            Alert.alert('Fake Shop', 'Kullanıcı bulunamadı')
        }
        else {
            navigation.navigate('ProductsPage')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../../assets/logo.png')} />
            </View>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={async (values) => await handleLogin(values)} >
                {({ handleSubmit, handleChange, values }) => (

                    <View style={styles.body_container}>
                        <Input placeholder='Kullanıcı adını giriniz :' value={values.username} onChange={handleChange('username')} iconName='person' />
                        <Input placeholder='Şifre giriniz:' value={values.password} onChange={handleChange('password')} iconName='vpn-key' isSecure />
                        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                    </View>
                )}
            </Formik>
        </SafeAreaView >
    );
}

export default Login;