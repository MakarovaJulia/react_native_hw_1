import { StatusBar } from 'expo-status-bar';
import {ScrollView, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {useEffect, useState} from "react";

function CheckBox(props) {
  return null;
}

export default function App() {
  const handleTextPress = () => console.log('Text clicked');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isAuth, setIsAuth] = useState(false);
    const [showPasswd, setShowPasswd] = useState(false);
    const [isError, setIsError] = useState(false);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState('');
  const [boxes, setBoxes] = useState([]);
  const [isReady, setIsReady] = useState(false);

    const handleSetName = (name) => {
        setName(name)
        setIsError(false)
        console.log(isError)
    };


    const handleSetPassword = (password) => {
        setPassword(password)
        setIsError(false)
        console.log(isError)
    };

    const handleLogin = (name, password) => {
        console.log(name + ' ' + password)
        if (name === 'Julia' && password === 'Qwerty') {
            setIsAuth(true)
        } else {
            setIsError(true)
        }
    };

  const handleSetSize = (size) =>{
    setWidth(size)
    setHeight(size)
  }

  const addBox = (color, width, height) =>{
    boxes.push({color: color, width: width, height:height})
    setBoxes(boxes)
    setIsReady(false)
  }

  console.log(boxes)

  useEffect(()=>{setIsReady(true)}, [addBox, width, height, color])

    return (
    <View style={styles.container}>
      { !isAuth ?
          <View style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            padding: 16,
          }}>
            { !isError ? <View></View> : <Text>Wrong username or password</Text>}
            <Text style={{ marginVertical: 16 }}>
              {name ? `Hi ${name}!` : 'What is your name?'}
            </Text>
            <TextInput
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(name) => handleSetName(name)}
            />
            <Text style={{ marginVertical: 16 }}>
              Enter password
            </Text>
            <TextInput
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(password) => handleSetPassword(password)}
            />
            <View>
              {showPasswd ? <View></View> : <Text>{password}</Text>}
            </View>
            <Button title='Show password' onPress={() =>setShowPasswd(!showPasswd)}/>
            <Button title='Login' onPress={() => handleLogin(name, password)}/>
          </View> :
          <View>
            <Text style={{fontSize: 50}}> Welcome! </Text>
            <Button title='Back to login' onPress={() => setIsAuth(false)}/>
          </View>
      }
      <View style={{ flex: 0.8, justifyContent: 'center' }}>
        <ScrollView contentContainerStyle={{justifyContent: 'center', alignItems: "center"}}>
          { isReady ? boxes.map((elem) =>
                  <Box color={elem.color} width={parseInt(elem.width)} height={parseInt(elem.height)}></Box>)
              :
                  <View><Text>No boxes</Text></View>}
        </ScrollView>
      </View>
      <View style={{flexDirection : 'row', gap: 10, padding: 10, alignItems: "center"}}>
        <Text style={{fontSize: 20}}>Размер</Text>
        <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5', width: 100}}
            keyboardType='numeric'
            onChangeText={(size) => handleSetSize(size)}
            maxLength={4}
        />
      </View>
      <View style={{flexDirection : 'row', justifyContent: "space-between", padding: 10, alignItems: "center"}}>
        <Text style={{fontSize: 20}}>Цвет:</Text>
        <Button title='' color="yellow" onPress={() => setColor('yellow')}/>
        <Button title='' color="green" onPress={() => setColor('green')}/>
        <Button title='' color='blue' onPress={() => setColor('blue')}/>
      </View>
      <Button title="Добавить" onPress={()=>addBox(color, width, height)}/>
      <Button title="Очистить" onPress={()=>setBoxes([])}/>
      <StatusBar style="auto" />
    </View>
  );
}

export const Box = (props) => (
    <View style={{ width: props.width, height: props.height, backgroundColor:
      props.color}} />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 30,
    justifyContent: 'center'
  },
});
