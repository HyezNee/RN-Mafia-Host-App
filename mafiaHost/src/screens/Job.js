import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { Button, List, ListItem } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withSetting } from '../contexts/Setting'
import _ from 'lodash';

export default withSetting(class Job extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(<View></View>)
    }
})