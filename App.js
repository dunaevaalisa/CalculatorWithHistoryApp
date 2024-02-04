import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [result, setResult] = useState(0);
  const [items, setItems] = useState([]);
  const [historyString, setHistoryString] = useState("");

  const plus = () => {
    const sum = parseFloat(firstValue) + parseFloat(secondValue);
    setResult(sum);
    setHistoryString(firstValue + " + " + secondValue + " = " + sum);
    setItems([...items, historyString]);
  }

  const minus = () => {
    const difference = parseFloat(firstValue) - parseFloat(secondValue);
    setResult(difference);
    setHistoryString(firstValue+ " + " + secondValue + " = " + difference);
    setItems([...items, historyString]);
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

      <FlatList
        data={items}
        renderItem={({item}) => 
          <View style={styles.listItem}>
            <Text style={{fontSize: 18}}>{item}</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    backgroundColor: '#87CEFA',
    padding: 5, 
    width:300,
    flexDirection: 'row'
  }
});

