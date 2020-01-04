import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native'
import { withSetting } from '../contexts/Setting'

jobCardPressed = () => {
    console.log('pressed');
}
class JobCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible : []
        }
    }
    componentDidMount (){ 
        let jobs  = this.props.jobs;
        arr = new Array(jobs.length);
        arr.fill(false);
        arr[0] = true;
        this.setState( {visible : arr})
    }
    render(){ 
        let {jobs, names} = this.props;
        let cards = [];
        for(let i = 0; i < jobs.length; i++){
            if(this.state.visible[i]){
                console.log(this.state.visible)
                cards.push(
                    <View>
                        <Text>{ names[i] }</Text>
                        <Text>의 직업을 확인합니다. 해당 플레이어는 핸드폰을 가져가 혼자 확인해주세요.</Text>  
                        <Text style = { styles.t }>{"당신의 직업은"}</Text>
                        <TouchableHighlight underlayColor = {'red'} onPress = {jobCardPressed}>
                            <Text>{ jobs[i] }</Text>
                        </TouchableHighlight>
                        <Text style = { styles.t }>{"입니다"}</Text>
                    </View>
                )
            }
        }

        return(         
            cards.map( (el) => el)
        )
    }
}

export default withSetting(class Check extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <JobCard 
                jobs = { this.props.settings.jobs }
                names = { this.props.settings.names }
            ></JobCard>
        )
    }
})

const styles = StyleSheet.create({
    t : {
        fontFamily: 'aNightsOfSillaM',
        fontSize: 28,      
    }
})