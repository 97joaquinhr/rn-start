import React, {useReducer} from 'react';
import { Text, StyleSheet, View,Button } from 'react-native';

const INCREMENT = 1;
const reducer = (state, action)=> {
    switch(action.type){
        case 'change_counter':
            return { ...state, counter: state.counter + action.payload};
        default:
            return state;
    }
};
const CounterScreen = () => {
    const [state,dispatch] = useReducer(reducer,{counter:0});
    const {counter} = state;
    return (
        <View>
            <Button
                title='Increase'
                onPress = {() => dispatch({type: 'change_counter',payload: INCREMENT})}
            />
            <Button
                title='Decrease'
                onPress = {() => dispatch({type: 'change_counter',payload: -1*INCREMENT})}
            />
            <Text>Current Count: {counter}</Text>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });
  
  export default CounterScreen;
  