import React from 'react';
import {View, Text, PanResponder} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import MapView from "react-native-maps";


class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this._panResponder = PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => {
                console.log('onStartShouldSetPanResponder');
                return true;
            },
            onStartShouldSetPanResponderCapture: (evt, gestureState) => {
                console.log('onStartShouldSetPanResponderCapture');
                return true;
            },
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                console.log('onMoveShouldSetPanResponder');
                return true;
            },
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
                console.log('onMoveShouldSetPanResponderCapture');
                return true;
            },

            onPanResponderGrant: (evt, gestureState) => {
                // The gesture has started. Show visual feedback so the user knows
                // what is happening!

                // gestureState.d{x,y} will be set to zero now
                console.log('onPanResponderGrant');
            },
            onPanResponderMove: (evt, gestureState) => {
                // The most recent move distance is gestureState.move{X,Y}

                // The accumulated gesture distance since becoming responder is
                // gestureState.d{x,y}
                console.log('onPanResponderMove');
            },
            onPanResponderTerminationRequest: (evt, gestureState) => {
                console.log('onPanResponderTerminationRequest');
                return true;
            },
            onPanResponderRelease: (evt, gestureState) => {
                // The user has released all touches while this view is the
                // responder. This typically means a gesture has succeeded
                console.log('onPanResponderRelease');
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // Another component has become the responder, so this gesture
                // should be cancelled
                console.log('onPanResponderTerminate');
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // Returns whether this component should block native components from becoming the JS
                // responder. Returns true by default. Is currently only supported on android.
                console.log('onShouldBlockNativeResponder');
                return true;
            },
        });

    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    {...this._panResponder.panHandlers}
                />
            </View>
        );
    }
}

export default createAppContainer(
    createStackNavigator({
        Home: {
            screen: HomeScreen
        },
    })
);
