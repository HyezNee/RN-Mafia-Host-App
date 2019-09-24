import React, {Component} from 'react';
import MyApp from './src/screens'
import SettingProvider from './src/contexts/Setting';

// Tip: MyApp을 SettingProvider로 바꿔준다.
// 이 SettingProvider 밑에 있는 애들 전부에게 변경된 값을 전달하기 때문에,
// 가장 상위에 있는 MyApp보다 위에 넣어준다.
// SettingProvider
//   ㄴ> MyApp
//      ㄴ> Welcome
//      ㄴ> Name
//      ㄴ> ....
const App = () => {
    return(
        <SettingProvider>
            <MyApp />
        </SettingProvider>
    );
};

export default App;