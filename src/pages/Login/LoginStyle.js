import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#557B83',
    },
    logo: {
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width,
        resizeMode: 'contain',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    logo_container: {
        flex: 1,

    },
    body_container: {
        flex: 1,
        backgroundColor: '#0c4e5c',
        marginTop: -10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
})