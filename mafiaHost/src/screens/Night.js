import React, {Component} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { withSetting } from '../contexts/Setting'
import { Button } from 'native-base'

class Police extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View></View>
        )
    }
}
class Doctor extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View></View>
        )
    }
}
class Mafia extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View></View>
        )
    }
}
class Citizen extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View></View>
        )
    }
}
export default withSetting(class Night extends Component{
    constructor(props){
        super(props);
        this.state = {
            curIndex : 0,
        }
        
    }
    act = () => {
        console.log("이거나오면안됨ㅋ")
    }
    setActByJob = () =>{
        
    }
    render(){
        var curIndex = this.state.curIndex;
        var curJob = this.props.settings.jobs[this.state.curIndex];
        return(
            <View>
                <Text>'이름'의 차례입니다. 버튼을 눌러 행동하세요.</Text>
                <Text>{curIndex}</Text>
                <Text>{curJob}</Text>
                <Button onPress = {this.act}>
                    <Text>히히</Text>
                </Button>
                <Button>
                    <Text>다음</Text>
                    <Text>({this.state.curIndex+1}/{this.props.settings.people}) </Text>
                </Button>
            </View>
        )
    }
})

