import React, {useState} from 'react';
import {View,Text,StyleSheet} from  'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TextScreen= () =>{
    const [name,setname] = useState('');
    return (
        <View>
            <Text>Enter name:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize = "none"
                autoCorrect = {false}
                value = {name}
                onChangeText = {newValue=> setname(newValue)}
            />
            <Text>My name is  {name}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor: 'black',
        borderWidth:1
    }
});
export default TextScreen;