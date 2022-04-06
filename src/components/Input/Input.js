import React from 'react';
import { View, TextInput, StatusBar } from 'react-native';
import styles from './InputStyle'

import { MaterialIcons } from '@expo/vector-icons';

const Input = ({ placeholder, onChange, value, iconName, isSecure }) => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChange} value={value} secureTextEntry={isSecure} />
            <MaterialIcons style={styles.icon} name={iconName} size={22} color="black" />

        </View>

    )
}
export default Input;