/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Container, Header, Content, Button, Icon, Row } from 'native-base';
import { Fonts } from '../Fonts';  //폰트 넣기 위한 import. 이렇게 뭐 넣기전엔 꼭 cmd에서 react-native link명령어를 입력해주자.
import { withSetting } from '../contexts/Setting'

// TIP: 클래스를 withSetting으로 덮음
// 새로운 context를 추가하려면
// withSetting(withPlaying(class ...)) 와 같이 인자로 계속 추가하면 된다
export default withSetting(class Welcome extends React.Component {
  constructor(props){
    super(props);
    this.state={
      time: 10,
      people: 4
    }
  }

  // _timeMinus(){ this.state.time > 5 && this.setState({time: this.state.time-1}) };
  // _timePlus(){ this.state.time < 20 && this.setState({time: this.state.time+1}) };
  // _peopleMinus(){ this.state.people > 4 && this.setState({people: this.state.people-1}) };
  // _peoplePlus(){ this.state.people < 12 && this.setState({people: this.state.people+1}) };

  // TIP: 이제 context 안에 있는 값을 불러오고, 설정 또한 그렇게 한다
  _newTimeMinus(){ this.props.settings.time > 5 && this.props.onChangeSetting('time', this.props.settings.time - 1) };
  _newTimePlus(){ this.props.settings.time < 20 && this.props.onChangeSetting('time', this.props.settings.time + 1) };
  _newPeopleMinus(){ this.props.settings.people > 4 && this.props.onChangeSetting('people', this.props.settings.people - 1) };
  _newPeoplePlus(){ this.props.settings.people < 12 && this.props.onChangeSetting('people', this.props.settings.people + 1) };
  
  _navigate(){ this.props.navigation.navigate('nameScreen', {
                time: this.state.time,
                people: this.state.people
              }
  )};

  render() {

    const {time, people}=this.state

    return (
      <View style={styles.container}>
        <View Title style={ styles.title }>
          <Text style={styles.titleText}>마피아 사회자.{"\n"}이것(으)로 대체되었다.</Text>
        </View>
        <Text style={{textAlign: 'center'}}>지 목 시 간{"\n"}(밤 중 특정 직업이 사람을 지목하여{"\n"}능력을 사용하는 시간)</Text>
        <View Time style={styles.buttons}>
          <Button light peopleMinus
            style={styles.PMbutton}
            onPress={this._newTimeMinus.bind(this)}>
              <Text style={styles.textInBtn}>-</Text></Button>
          <View numPeople style={styles.NUMbutton}>
            <Text style={styles.textInBtn}>{time}초</Text>
          </View>
          <Button light peoplePlus
            style={styles.PMbutton}
            onPress={this._newTimePlus.bind(this)}>
              <Text style={styles.textInBtn}>+</Text></Button>
        </View>
        <Text>참 여 인 원 수</Text>
        <View People style={styles.buttons}>
          <Button light peopleMinus
            style={styles.PMbutton}
            onPress={this._newPeopleMinus.bind(this)}>
              <Text style={styles.textInBtn}>-</Text></Button>
          <View numPeople style={styles.NUMbutton}>
            <Text style={styles.textInBtn}>{people}명</Text>
          </View>
          <Button light peoplePlus
            style={styles.PMbutton}
            onPress={this._newPeoplePlus.bind(this)}>
              <Text style={styles.textInBtn}>+</Text></Button>
        </View>
        <View OK style={styles.buttons}>
          <Button OK
            style={styles.OK}
            onPress={ this._navigate.bind(this) }>
          <Text style={styles.textInBtn} style={{color: '#8ac9b0'}}>확인</Text></Button>
        </View>
      </View>
    )};
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    width: '28%',
    height: '28%',
    justifyContent: 'center',
    marginLeft: '3%',
    marginRight: '3%',
  }
  /*scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },*/
});

//export default App;

//const rootElement = document.getElementById("root"); --> 재원피셜 리액트에서만(?)
//ReactDOM.render(<MyApp />, rootElement);
//export default MyApp;

