import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
export default function FlatButton({ text, onPress }) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.button}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        transform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
})