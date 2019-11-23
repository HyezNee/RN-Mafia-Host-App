import React, { useState } from 'react';
import _ from 'lodash';

const SettingContext = React.createContext({ option: 1 })

const SettingProvider = props => {
    // context 초기값을 제공하는 App 컴포넌트
    // TIP: useState안에 초기값 넣기
    const [state, setState] = useState({
        time: 10,
        people: 4,
        names: [],
        mafia: 0,
        police: 0,
        doctor: 0,
    });

    // TIP: context의 값을 바꿔주는 함수.
    // 바꿀 설정의 key와 값(value)
    const onChangeSetting = (key, value) => {
        // 기존의 state에 key: value를 덮어씌운다.
        setState({ ...state, [key]: value })
    }

    // TIP: provider의 value 안에 넘기고 싶은 값을 넣는다.
    // 이제 다른 곳에서 this.props.settings를 불러오면 이 클래스의 state를 가져온다
    return (
        <SettingContext.Provider value={{ settings: state, onChangeSetting }}>
            {props.children}
        </SettingContext.Provider>
    );
}

export default SettingProvider

export const withSetting = WrappedComponent => props => {
    return (
        <SettingContext.Consumer>
            {/* TIP: 위의 provider안에 넘겨준 값들을 가져온다. WrappedComponent안에도 똑같이 넣어줘야함 */}
            {({ settings, onChangeSetting }) => 
                <WrappedComponent 
                    {...props} 
                    settings={settings} 
                    onChangeSetting={onChangeSetting}
                />
            }
        </SettingContext.Consumer>
    )
}
