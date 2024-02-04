
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function History({route}) {
    const {history} = route.params;

    return (
<View style={styles.container}>
<FlatList
data={history}
renderItem={({item}) => 
  <View style={styles.listItem}>
    <Text style={{fontSize: 18}}>{item}</Text>
  </View>
}
/>
</View>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
  