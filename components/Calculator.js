import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from 'react';
import {Keyboard} from 'react-native';

export default function Calculator({navigation}) {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);

  const plus = () => {
    const sum = parseFloat(firstValue) + parseFloat(secondValue);
    setResult(sum);
    setHistory([...history, `${firstValue} + ${secondValue} = ${sum}`]);
    Keyboard.dismiss();
  }

  const minus = () => {
    const difference = parseFloat(firstValue) - parseFloat(secondValue);
    setResult(difference);
    setHistory([...history, `${firstValue} - ${secondValue} = ${difference}`]);
    Keyboard.dismiss();
  }

  

  return (
    <View style={styles.container}>
      <Text>Result: {result} </Text>
      <StatusBar style="auto" />
      <TextInput  
        style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText ={text => setFirstValue(text)}
        keyboardType="numeric"
      />
      <TextInput  
        style={{width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText ={text => setSecondValue(text)}
        keyboardType="numeric"
      />

      <Button title='+' color='blue' onPress={plus}/> 
      <Button title='-' color='blue' onPress={minus}/>
      <Button title='History' color='blue' onPress={() => navigation.navigate('History', { history })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

