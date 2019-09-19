import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Name extends React.Component {
    constructor(props){
        super(props)
    }

    render() {

        return(
            <View style={styles.container}>
                <Image
                style={{height: '60%', width: '60%', resizeMode: 'contain'}}
                source={require('../../assets/img/seats.png')}/>
                <Text>A 사람을 기준으로 반시계방향으로 돌아가며 이름을 입력 해 주세요.</Text>
                <View style={styles.name}>
                    {/*<Text>{ this.props.time }, {this.props.people} </Text>*/}
                </View>
            </View>
        )};

}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    name: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
})