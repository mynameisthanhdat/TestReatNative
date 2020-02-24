import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { StyleSheet, View, Text, Modal, FlatList, TouchableOpacity,
TouchableWithoutFeedback, 
Keyboard} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        {title: 'Somthing 1', rating: 5, body: 'lorem ipsum', key: '1'},
        {title: 'Somthing 2', rating: 4, body: 'lorem ipsum', key: '2'},
        {title: 'Somthing 3', rating: 3, body: 'lorem ipsum', key: '3'},
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        });
        setModalOpen(false);
    }
    return(
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons 
                            name='close'
                            size={24}
                            style={{ ...styles.modalToggle, ...styles.modalClose}}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>        
            </Modal>

            <MaterialIcons 
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />
            <FlatList 
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        borderRadius: 10,
        padding: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 20,
    },
    modalContent: {
        flex: 1,
    }
})
