import React, {useState} from 'react';
import { Text, StyleSheet, View,Button } from 'react-native';
const ColorScreen = () => {
    const [counter,setCounter] = useState(0);
    return (
        <View>
            <Button
                title='Increase'
                onPress = {() => {
                    //Don't do this!
                    //counter++;
                    setCounter(counter+1);
                }}
            />
            <Button
                title='Decrease'
                onPress = {() => {
                    setCounter(counter-1);
                }}
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
  
  export default ColorScreen;
  