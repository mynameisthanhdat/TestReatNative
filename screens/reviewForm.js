import React from 'react';
import { globalStyles } from '../styles/global';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik'
import * as yup from 'yup';

// import FlatButton from '../shared/button';

const reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        })
})

export default function ReviewForm({ addReview }) {
    return (
        <View>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addReview(values);
                }} 
            >
                {(props) => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.title && props.errors.title }</Text>

                        <TextInput 
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder='Review body'
                            onChangeText={props.handleChange('body')}
                            onBlur={props.handleBlur('body')}
                            value={props.values.body}
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.body && props.errors.body }</Text>

                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            onBlur={props.handleBlur('rating')}
                            value={props.values.rating}
                            keyboardType='numeric'
                        />
                        <Text style={globalStyles.errorText}>{ props.touched.rating && props.errors.rating }</Text>

                        {/* <FlatButton text='SUBMIT' onPress={props.handleSubmit} /> */}
                        <Button title='SUBMIT' onPress={props.handleSubmit} style={{backgroundColor: '#f01d71'}} />
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f01d71',
    }
})
