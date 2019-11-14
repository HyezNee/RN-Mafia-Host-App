import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, List, ListItem } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withSetting } from '../contexts/Setting'
import _ from 'lodash';

// TIP: 클래스를 withSetting으로 덮음
// 새로운 context를 추가하려면
// withSetting(withPlaying(class ...)) 와 같이 인자로 계속 추가하면 된다
export default withSetting(class Name extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const time=this.props.settings.time;
        const people=this.props.settings.people;
        let edit=[];

        for(let i=0;i<people;i++){
            edit.push(
                <ListItem style={styles.name}>
                    <TouchableOpacity style={{ justifyContent: 'center', width: '100%', height: '100%' }}>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <Text style={styles.alphabet}>{String.fromCharCode('A'.charCodeAt() + i)}</Text>
                            <Text style={{color: '#000'}}>  터치하여 이름을 추가/수정해주세요.</Text>
                        </View>
                    </TouchableOpacity>
                </ListItem>
            )
        }

        return (
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Button OK
                        style={styles.OK}>
                        <Text style={styles.textInBtn} style={{color: '#8ac9b0'}}>다음</Text></Button>
                </View>
                <View
                style={styles.nameBox}>
                    <Image
                    style={{height: '60%', width: '60%', resizeMode: 'contain'}}
                    source={require('../../assets/img/seats.png')}/>
                    <Text>A 사람을 기준으로 반시계방향으로 돌아가며 이름을 입력 해 주세요.</Text>
                </View>
                <List style={styles.nameBox}>
                    {_.map(edit, el => el)}
                </List>
            </View>
        )
    };
})

const styles=StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    nameBox: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        width: '100%',
    },
    name: {
        // justifyContent: 'flex-start',
        // backgroundColor: '#9ae0c4',
        height: 60,
        width: '100%',
    },
    alphabet: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#9ae0c4',
        width: '15%',
        height: '70%',
        borderRadius: 100,
    },
    OK:{
        backgroundColor: '#fff',
        borderColor: '#8ac9b0',
        borderWidth: 1,
        width: '10%',
        height: '40%',
        justifyContent: 'center',
        marginLeft: '3%',
        marginRight: '3%',
    },
    textInBtn:{
        fontSize: 22,
        textAlign: 'center',
    },
})