import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Alert} from 'react-native';
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
        this.state = {
            // localName: [],
            text: '' // 이름 텍스트 입력이 실시간으로 바뀌는걸 보여주기 위해서 state 사용
        }
        this.localName= [];
    }
    // namesInput = []; // 각 플레이어의 이름 입력이 들어가는 배열
    // confirmTextInput = idx => { // 텍스트 입력이 끝날시 실행되는 함수
    //     // this.props.onChangeSetting('names', [...this.props.settings.names, text])   // 전역변수 names[]값 수정(새 text가 넣어진 채로)
    //     // 
    //     this.state.localName[idx] = this.state.text;
    //     this.setState({
    //         text: ''
    //     })
    // }

    showAlert = () => {
        Alert.alert('알림','모든 이름을 입력해주세요!',[{text: '확인'}])
    }
    typingText = (text,i) => {        
        // let arr = this.state.localName;
        // arr[i] = text;
        // this.setState({
            //     localName: arr
            // })
        // console.log(this.state.localName);
        this.localName[i] = text;
        this.props.onChangeSetting('names', this.localName);

    }
    _navigate(){
        // this.props.onChangeSetting('names', this.state.localName);
        console.log(this.props.settings.names)
        if(this.props.settings.names.length == this.props.settings.people){
            console.log("1if");
            if(!this.props.settings.names.includes("")){
                console.log("2if");
                this.props.navigation.navigate('jobScreen')    // 다음 화면으로 넘어가는 함수
            }
            else
                this.showAlert();   
        }
        else{
            console.log(this.props.settings.names.length + "," + this.props.settings.people );
            this.showAlert();   
        }

    }


    render() {
        const { time, people } = this.props.settings
        //const names = this.props.settings.names
        let edit=[];

        for(let i=0;i<people;i++){
            edit.push(
                <ListItem style={styles.name} key ={i}> 
                {/* key를 추가해서 에러메세지 제거. https://codingmania.tistory.com/292 */}
                    <Text style={styles.alphabet}>{String.fromCharCode('A'.charCodeAt() + i)}</Text>
                    <TextInput
                        style={{ justifyContent: 'center', width: '80%', height: '100%' }}
                        placeholder = "터치하여 이름을 추가/수정 해 주세요."
                        onChangeText = {(text)=>{this.typingText(text,i)}}> 
                        {/* 이름 입력 후 키보드에서 완료를 누르지 않아도 저장됨 */}
                        {/* onEndEditing = {() => this.confirmTextInput(i)}> */}
                    </TextInput>
                </ListItem>
            )
        }

        return (
            <View style={styles.container}>
                <ScrollView style={styles.ScrollView}>
                    <Button OK
                        style={styles.OK} onPress={this._navigate.bind(this)}>
                        <Text style={styles.textInBtn} style={{color: '#8ac9b0'}}>다음</Text></Button>
                    <View style={{alignItems: 'center'}}>
                        <Image
                        source={require('../../assets/img/seats.png')}/>
                        <Text>A 사람을 기준으로 반시계방향으로 돌아가며 이름을 입력 해 주세요.</Text>
                    </View>
                    <List style={styles.nameBox}>
                        {_.map(edit, el => el)}
                    </List>
                </ScrollView>
            </View>
        )
    }
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
    },
    OK:{
        flex:0.1,
        backgroundColor: '#fff',
        borderColor: '#8ac9b0',
        borderWidth: 1,
        width: '13%',
        // height: '5%',
        justifyContent: 'center',
        paddingTop: '6%',
        marginTop: '3%',
        marginLeft: '83%',
        marginRight: '3%',
    },
    textInBtn:{
        fontSize: 22,
        textAlign: 'center',
    },
    ScrollView:{
        marginHorizontal: 20,
    }
})