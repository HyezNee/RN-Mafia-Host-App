import React, {Component} from 'react'
import { Text, View, StyleSheet, Modal } from 'react-native'
import { withSetting } from '../contexts/Setting'
import { Button } from 'native-base'


class NonCitizen extends Component{
    constructor(props){
        super(props)
        this.state = {
            isVisible : 'false'
        };
    }
    render(){
        return(
            <Modal
            animationType = {"fade"}  
            transparent = {false}  
            visible = {this.state.isVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}>>
            <View>
                <Text>나 시민 아니다!</Text>
            </View>
            <Button onPress={()=>{this.setState({isVisible : 'false'})}}>

            </Button>
            </Modal>
        )
    }
}
class Citizen extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View>
                <Text>시민!</Text>
            </View>
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
            <View style = {{flex:1}}>
                <NonCitizen></NonCitizen>

                <View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
                    <Text style = {{fontFamily : 'aNightsOfSillaM',fontSize : 28}}>밤</Text>
                </View>
                <View  style = {{flex:3, justifyContent:'center', alignItems:'center'}}>
                    <Text style = {{fontSize:20}}>{this.props.settings.names[curIndex]}의 차례입니다. 버튼을 눌러 행동하세요.</Text>
                    <Text>{curIndex}</Text>
                    <Text>{curJob}</Text>
                </View>
                <View style={{flex:1, alignItems:'center',}}>
                    <Button style ={{width:'40%', height:'25%', backgroundColor:'#fff', borderColor: '#8ac9b0', justifyContent:'center'}}
                        onPress = {this.act}>
                        <Text>히히</Text>
                    </Button>
                </View>
                <View style = {{flex:2, alignItems:'center',}}>
                    <Button style={{width:'40%', height:'25%', backgroundColor:'#fff', borderColor: '#8ac9b0', justifyContent:'center'}}>
                        <Text>다음</Text>
                        <Text>({this.state.curIndex+1}/{this.props.settings.people}) </Text>
                    </Button>
                </View>
            </View>
        )
    }
})

