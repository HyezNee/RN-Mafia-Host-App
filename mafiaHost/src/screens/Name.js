import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { List, ListItem } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withSetting } from '../contexts/Setting'
import _ from 'lodash';

// TIP: 클래스를 withSetting으로 덮음
// 새로운 context를 추가하려면
// withSetting(withPlaying(class ...)) 와 같이 인자로 계속 추가하면 된다
export default withSetting(class Name extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: '' // 이름 텍스트 입력이 실시간으로 바뀌는걸 보여주기 위해서 state 사용
        }
    }
    namesInput = []; // 각 플레이어의 이름 입력이 들어가는 배열
    confirmTextInput = text => { // 텍스트 입력이 끝날시 실행되는 함수
        this.namesInput.push(text); 
        console.log(this.namesInput);
    }
    render() {
        const time=this.props.settings.time;
        const people=this.props.settings.people;
        let edit=[];
        for(let i=0;i<people;i++){
            edit.push(
                <ListItem style={styles.name}>
                    <Text style={styles.alphabet}>{String.fromCharCode('A'.charCodeAt() + i)}</Text>
                    <TextInput
                        style={{ justifyContent: 'center', width: '80%', height: '100%' }}
                        placeholder = "터치하여 이름을 추가/수정 해 주세요."
                        onChangeText = {(text) => this.setState({text})}  
                        onEndEditing = {() => this.confirmTextInput(this.state.text)}> 
                    </TextInput>
                </ListItem>
            )
        }

        return (
            <View style={styles.container}>
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
        // height: 60,
        width: '100%',
    },
    alphabet: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#9ae0c4',
        width: '15%',
        height: '50%',
        borderRadius: 100,
    }
})