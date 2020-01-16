import React, {Component} from 'react'
import { Text, View, StyleSheet, Modal } from 'react-native'
import { withSetting } from '../contexts/Setting'
import { Button, List, ListItem, Radio, Left, Right } from 'native-base'
class SelectRadio extends Component{
    constructor(props){
        super(props)
        this.state = {
            selected : false,
        }
    }
    render(){
        const thisIndex = this.props.index;
        return(
            <ListItem>
                <Left>
                    <Text>{this.props.name}</Text>
                </Left>
                <Right>
                    <Radio onPress={()=>{this.setState({selected : !this.state.selected})
                console.log('selected')}} selected = {this.state.selected}/>
                </Right>
            </ListItem>
        )
    }
}
export default withSetting(class Night extends Component{
    constructor(props){
        super(props);
        this.state = {
            curIndex : 0,
            citizenModalVisible: false,
            nonCitizenModalVisible: false,
        }

        this.citizenButton = 
        <Button style ={{width:'40%', height:'50%', backgroundColor:'#fff', borderColor: '#8ac9b0', justifyContent:'center'}}
        onPress = {()=>{this.setState({...this.state, citizenModalVisible: !this.state.citizenModalVisible})}}>
        <Text>히히</Text>
        </Button>;

        this.nonCitizenButton = 
        <Button style ={{width:'40%', height:'50%', backgroundColor:'#fff', borderColor: '#8ac9b0', justifyContent:'center'}}
        onPress = {()=>{this.setState({...this.state, nonCitizenModalVisible: true});console.log(this.state)}}>
        <Text>호호</Text>
        </Button>;
    }

    setActByJob = (curJob) =>{
        if(curJob == '시민'){
            return(
                <Modal //시민일 시 모달창
            animationType = {"fade"}  
            transparent = {false}  
            visible = {this.state.citizenModalVisible}>
                <View>
                <Text>나 시민이다!</Text>
                
                <Button onPress = {()=>this.setState({...this.state, citizenModalVisible : false})}>

                </Button>
                </View>
            </Modal>
            )
        } else {
            let arr = []
            for(var i = 0; i < this.props.settings.people; i++){
                arr.push(
                    <SelectRadio index = {i}
                    name ={this.props.settings.names[i]}>
                    </SelectRadio>
                    // <ListItem>
                    //     <Left>
                    //     <Text>{this.props.settings.names[i]}</Text>

                    //     </Left>
                    //     <Right>
                    //         <Radio onPress={()=>this.setState}/>
                    //     </Right>
                    // </ListItem>
                )
            }
            return(<Modal 
                animationType = {"fade"}  
                transparent = {false}  
                visible = {this.state.nonCitizenModalVisible}>
                <View>
                    <Text>나 시민 아니다!</Text>
                    <List>
                        {arr}
                    </List>
                    <Button onPress = {()=>this.setState({...this.state, nonCitizenModalVisible : false})}>
                    </Button>
                    </View>
                </Modal>
            )
        }
    }
    nextButtonPressed = () => {
        if(this.state.curIndex < this.props.settings.people - 1){
            this.setState({
                ...this.state,
                curIndex : this.state.curIndex + 1
            })
        } else { // 마지막 사람 끝 

        }
    }
    render(){
        const curIndex = this.state.curIndex;
        const curJob = this.props.settings.jobs[this.state.curIndex];
        
        return(
            <View style = {{flex:1}}>
                {this.setActByJob(curJob)}
                <View style = {{flex:2, alignItems:'center', justifyContent:'center'}}>
                    <Text style = {{fontFamily : 'aNightsOfSillaM',fontSize : 28}}>밤이 되었습니다.</Text>
                </View>
                <View style = {{flex:3, justifyContent:'center', alignItems:'center'}}>
                    <Text style = {{fontSize:20}}>{this.props.settings.names[curIndex]}의 차례입니다. 버튼을 눌러 행동하세요.</Text>
                    <Text>{curIndex}</Text>
                    <Text>{curJob}</Text>
                </View>
                <View style={{flex:1, alignItems:'center',}}>
                    {curJob == '시민' ? this.citizenButton : this.nonCitizenButton}
                </View>
                <View style = {{flex:2, alignItems:'center',}}>
                    <Button 
                    style={{width:'40%', height:'25%', backgroundColor:'#fff', borderColor: '#8ac9b0', justifyContent:'center'}}
                    onPress = {this.nextButtonPressed}>
                        <Text>다음</Text>
                        <Text>({this.state.curIndex+1}/{this.props.settings.people}) </Text>
                    </Button>
                </View>
            </View>
        )
    }
})

