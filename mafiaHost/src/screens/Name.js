import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// TIP: 클래스를 withSetting으로 덮음
// 새로운 context를 추가하려면
// withSetting(withPlaying(class ...)) 와 같이 인자로 계속 추가하면 된다
export default withSetting(class Name extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                style={{height: '60%', width: '60%', resizeMode: 'contain'}}
                source={require('../../assets/img/seats.png')}/>
                <Text>A 사람을 기준으로 반시계방향으로 돌아가며 이름을 입력 해 주세요.</Text>
                <View style={styles.name}>
                    <Text>
                        { this.props.settings.time }, {this.props.settings.people}
                    </Text>
                </View>
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
    name: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
})