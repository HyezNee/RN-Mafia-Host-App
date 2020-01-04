import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import welcomeScreen from './Welcome'
import nameScreen from './Name';
import jobScreen from './Job';
import checkScreen from './Check';


const MyApp = createStackNavigator(
    {
        welcomeScreen: {
            screen: welcomeScreen,
            navigationOptions: ({navigation}) => ({
                header: null,   // 상단 탭 제거
            }),
        },
        nameScreen: {
            screen: nameScreen,
            navigationOptions: ({navigation}) => ({
                header: null,   // 상단 탭 제거
            }),
        },
        jobScreen: {
            screen: jobScreen,
            navigationOptions: ({navigation}) => ({
                header: null,   // 상단 탭 제거
            }),
        },
        checkScreen: {
            screen: checkScreen,
            navigationOptions: ({navigation}) => ({
                header: null,   // 상단 탭 제거
            }),
        }
    },
    /*{
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
        initialRouteName: 'welcomeScreen',
    }*/
);

export default createAppContainer(MyApp);