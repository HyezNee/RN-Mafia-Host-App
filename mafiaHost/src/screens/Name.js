import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { List, ListItem } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Name extends React.Component {
    /*constructor(props){
        super(props)
    }*/

    render() {
        const time = this.props.navigation.getParam('time');    // 전역변수로 수정 필요
        const people = this.props.navigation.getParam('people');
        let edit=[];

        for(let i=0;i<people;i++){    // each child in a list should have a unique key prop 이라는 warning 뜸. key를 어떻게 넣지????!
            edit.push(
                <ListItem>
                    <TouchableOpacity
                    style={styles.name}>
                        <Text style={{color: '#000'}}>터치하여 이름을 추가/수정해주세요.</Text>
                    </TouchableOpacity>
                </ListItem>
            )
        }

        return(
            <View style={styles.container}>
                <Image
                style={{height: '60%', width: '60%', resizeMode: 'contain'}}
                source={require('../../assets/img/seats.png')}/>
                <Text>A 사람을 기준으로 반시계방향으로 돌아가며 이름을 입력 해 주세요.</Text>
                <List>
                    {edit}
                </List>
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
    names: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        width: '100%',
    },
    name: {
        justifyContent: 'center',
        backgroundColor: '#9ae0c4',
        height: '30%',
        width: '100%',
    }
})