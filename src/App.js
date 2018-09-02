import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({ 
            apiKey: 'AIzaSyAQ3RctE54L87yOWoe5Y_AbE8UhAFblGzA',
            authDomain: 'auth-f46df.firebaseapp.com',
            databaseURL: 'https://auth-f46df.firebaseio.com',
            projectId: 'auth-f46df',
            storageBucket: 'auth-f46df.appspot.com',
            messagingSenderId: '110261710901'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;