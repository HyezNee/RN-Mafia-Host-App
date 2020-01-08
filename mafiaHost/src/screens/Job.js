import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { Button, List, ListItem } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withSetting } from '../contexts/Setting'

export default withSetting(class Job extends React.Component {
    constructor(props){
        super(props);
    }
    _mafiaMinus(){ this.props.settings.mafia > 0 && this.props.onChangeSetting('mafia', this.props.settings.mafia - 1) };
    _mafiaPlus(){ this._ifJobCanAdded() && this.props.onChangeSetting('mafia', this.props.settings.mafia + 1) }; 
    _policeMinus(){ this.props.settings.police > 0 && this.props.onChangeSetting('police', this.props.settings.police - 1) };
    _policePlus(){ this._ifJobCanAdded() && this.props.onChangeSetting('police', this.props.settings.police + 1) }; 
    _doctorMinus(){ this.props.settings.doctor > 0 && this.props.onChangeSetting('doctor', this.props.settings.doctor - 1) };
    _doctorPlus(){ this._ifJobCanAdded() && this.props.onChangeSetting('doctor', this.props.settings.doctor + 1) }; 

    _ifJobCanAdded(){   // 각 직업의 증가 조건
        var {people, mafia, police, doctor} = this.props.settings
        if(mafia + police + doctor < people) //총 인원수보다 많이 설정할수는 없음. 이 밑에 원하는 조건을 더 추가하는 식으로 구현하자!!
            return true;
        else
            return false;
    }
    
    _randomizeJob(){ // 랜덤하게 직업 배정해주는 함수
        let { people, mafia, police, doctor, jobs} = this.props.settings;

        for(var i = 0; i < people; i++){
            jobs[i] = '시민';
        }
        for(var i = 0; i < mafia; i++){
            var rand = Math.floor(Math.random() * people);
            if(jobs[rand] == '시민')    // rand 돌려서 해당 인덱스 마피아로 바꾸기
                jobs[rand] = '마피아';
            else    // 이미 시민 외 직업이 정해진 경우
                i--;
        }
        for(var i = 0; i < police; i++){
            var rand = Math.floor(Math.random() * people);
            if(jobs[rand] == '시민')
                jobs[rand] = '경찰';
            else
                i--;
        }
        for(var i = 0; i < doctor; i++){
            var rand = Math.floor(Math.random() * people);
            if(jobs[rand] == '시민')
                jobs[rand] = '의사';
            else
                i--;
        }
        this.props.onChangeSetting('jobs', jobs);
        console.log(this.props.settings.jobs);
    }

    _navigate(){ 
        this._randomizeJob();
        this.props.navigation.navigate('checkScreen'      // 다음 화면으로 넘어가는 함수
    )}

    render() {
        const {names, people, mafia, police, doctor} = this.props.settings
        // console.log(names);
        // let testText=[]

        // for(let i=0;i<names.length;i++){
        //     testText.push(names[i])
        // }
        // return(<Text>{ names }</Text>)
        return(
            <View style = {styles.container}>
                <View Title style={ styles.title }>
                    <Text style={styles.titleText}>직업 분배</Text>
                </View>

                <Text style={{textAlign: 'center'}}>마피아</Text>
                <View Time style={styles.buttons}>
                    <Button light mafiaMinus
                        style={styles.PMbutton}
                        onPress={this._mafiaMinus.bind(this)}>
                        <Text style={styles.textInBtn}>-</Text>
                    </Button>
                    <View numMafia style={styles.NUMbutton}>
                    <Text style={styles.textInBtn}>{mafia}명</Text>
                    </View>
                    <Button light mafiaPlus
                        style={styles.PMbutton}
                        onPress={this._mafiaPlus.bind(this)}>
                        <Text style={styles.textInBtn}>+</Text>
                    </Button>
                </View>

                <Text style={{textAlign: 'center'}}>경찰</Text>
                <View Time style={styles.buttons}>
                    <Button light policeMinus
                        style={styles.PMbutton}
                        onPress={this._policeMinus.bind(this)}>
                        <Text style={styles.textInBtn}>-</Text>
                    </Button>
                    <View numMafia style={styles.NUMbutton}>
                    <Text style={styles.textInBtn}>{police}명</Text>
                    </View>
                    <Button light policePlus
                        style={styles.PMbutton}
                        onPress={this._policePlus.bind(this)}>
                        <Text style={styles.textInBtn}>+</Text>
                    </Button>
                </View>

                <Text style={{textAlign: 'center'}}>의사</Text>
                <View Time style={styles.buttons}>
                    <Button light doctorMinus
                        style={styles.PMbutton}
                        onPress={this._doctorMinus.bind(this)}>
                        <Text style={styles.textInBtn}>-</Text>
                    </Button>
                    <View numMafia style={styles.NUMbutton}>
                    <Text style={styles.textInBtn}>{doctor}명</Text>
                    </View>
                    <Button light doctorPlus
                        style={styles.PMbutton}
                        onPress={this._doctorPlus.bind(this)}>
                        <Text style={styles.textInBtn}>+</Text>
                    </Button>
                </View>

                {/*일단 title 스타일을 재탕*/}
                <View Title style={ styles.title }>
                    <Text style={styles.titleText}>시민 {people-mafia-police-doctor}명으로 게임이 진행됩니다</Text>
                </View>

                <View OK style={styles.buttons}>
                <Button OK
                    style={styles.OK}
                        onPress={ this._navigate.bind(this) }
                    >
                <Text style={styles.textInBtn} style={{color: '#8ac9b0'}}>확인</Text></Button>
                </View>
            </View>
        )
    }
})
const styles = StyleSheet.create({
    title:{
        flex: 1,
        flexDirection : 'column',
        alignItems: 'center',
        //justifyContent: 'flex-start',
        marginTop: '10%',
      },
    titleText:{
        fontFamily: 'aNightsOfSillaM',
        fontSize: 28,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        flexDirection : 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    buttons:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '3%',
    },
    PMbutton:{
        width: '14%',
        height: '35%',
        borderRadius: 100,
        justifyContent: 'center',
        marginLeft: '2%',
        marginRight: '2%',
    },
    textInBtn:{
        fontSize: 22,
        textAlign: 'center',
    },
    NUMbutton:{
        backgroundColor: '#9ae0c4',
        width: '28%',
        height: '74%',
        borderRadius: 200,
        justifyContent: 'center',
        marginLeft: '3%',
        marginRight: '3%',
    },
    OK:{
        backgroundColor: '#fff',
        borderColor: '#8ac9b0',
        borderWidth: 1,
        width: '20%',
        height: '50%',
        justifyContent: 'center',
        marginLeft: '3%',
        marginRight: '3%',
    }
})