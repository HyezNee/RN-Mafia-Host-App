import React, {Component} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { withSetting } from '../contexts/Setting'

export default withSetting(class Night extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                 <Text>'이름'의 차례입니다. 버튼을 눌러 행동하세요.</Text>
            </View>
    )}
})

