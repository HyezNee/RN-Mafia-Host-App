import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { List, ListItem } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withSetting } from '../contexts/Setting'

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
                <ListItem>
                    <TouchableOpacity
                    style={styles.name}>
                        <Text style={{color: '#000'}}>터치하여 이름을 추가/수정해주세요.</Text>
                    </TouchableOpacity>
                </ListItem>
            )
        }

        return (
            <View style={styles.container}>
                <View
                style={styles.names}>
                    <Image
                    style={{height: '60%', width: '60%', resizeMode: 'contain'}}
                    source={require('../../assets/img/seats.png')}/>
                    <Text>A 사람을 기준으로 반시계방향으로 돌아가며 이름을 입력 해 주세요.</Text>
                </View>
                <List
                style={styles.names}>
                    {edit}
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
    names: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
        width: '100%',
    },
    name: {
        justifyContent: 'flex-start',
        backgroundColor: '#9ae0c4',
        height: '30%',
        width: '100%',
    }
})