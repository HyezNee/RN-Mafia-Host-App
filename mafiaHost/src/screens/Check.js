import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native'
import { withSetting } from '../contexts/Setting'
import { Button } from 'native-base';

/*
추가해야되는 작업
1. 다음 페이지로 넘어가게 설정 
2. 직업 확인시 혹은 다음 버튼 클릭시 소리 추가하면 좋을듯
3. 스타일링 깔끔하게..
 */
class JobCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            curIndex: 0,
            touched: false
        }
    }
    okButtonPressed = () => {
        const people = this.props.people;
        console.log(this.state.curIndex)

        if(this.state.curIndex < people - 1){
            this.setState({
                curIndex : this.state.curIndex + 1,
                touched : true
            }) 
        } else { 
            console.log("끝!")
        }
        this.setState({touched:false}); 
    }

    showJobCard = () => {
        this.setState({touched:true});
    }
    hideJobCard = () => {
        this.setState({touched:false});
    }

    render(){ 
        const {jobs, names} = this.props;
        let cards = [];
        console.log(names);
        return(

            <View style = {{flex:1, justifyContent:"center"}}>
                <View style = { styles.header }>
                    <Text style = {{fontFamily : 'aNightsOfSillaM',fontSize : 28}} >직업 확인</Text>
                </View>

                <View style = {{flex : 3, alignItems : "center", justifyContent:"center", borderWidth : 1,}}>
                    <Text style = {{ fontSize: 15}}>{ names[this.state.curIndex] }의 직업을 확인합니다.</Text>  
                    <Text>해당 플레이어는 핸드폰을 가져가 혼자 확인해주세요.</Text>  
                </View>

                <View style = { styles.jobCard }>
                    <TouchableHighlight underlayColor = {'#9ae0c4'}  onLongPress = {this.showJobCard} onHideUnderlay = {this.hideJobCard }>
                        <View style = {{borderWidth: 1, minWidth:'70%', minHeight:'70%', alignItems: "center", justifyContent : "center"}}>
                            {this.state.touched &&  // 위 view 영역이 터치되면 touched가 true가 되서 아래 텍스트가 보임.
                            <View style = {{alignItems: "center"}}>
                                <Text style = { styles.t }>당신의 직업은</Text>
                                <Text style = { styles.t }>{ jobs[this.state.curIndex] }</Text>
                                <Text style = { styles.t }>입니다</Text>
                            </View>}
                        </View>
                    </TouchableHighlight>
                </View> 

                <View  style = { styles.btn } >
                    <Button style = {styles.OK} onPress = {this.okButtonPressed}>
                        <Text>다음</Text>
                        <Text> ({this.state.curIndex+1}/{this.props.people}) </Text>
                    </Button>
                </View>
            </View>
        )
    }
}

export default withSetting(class Check extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <JobCard // 여기서 JobCard에 정보 넘김
                jobs = { this.props.settings.jobs }
                names = { this.props.settings.names }
                people = { this.props.settings.people }
            ></JobCard>
        )
    }
})

const styles = StyleSheet.create({
    header : {
        flex : 2,
        justifyContent : "center",
        alignItems : "center",
        borderWidth : 1,
    },
    jobCard : {
        flex : 5,
        alignItems : "center",
        justifyContent : "center",
        borderWidth : 1,
    },
    t : {
        fontFamily : 'aNightsOfSillaM',
        fontSize : 28,      
    },
    btn : {
        flex : 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '3%',        
    },
    OK : {
        backgroundColor: '#fff',
        borderColor: '#8ac9b0',
        borderWidth: 1,
        width: '25%',
        height: '30%',
        justifyContent: 'center',
        marginLeft: '3%',
        marginRight: '3%',
    }
    
})