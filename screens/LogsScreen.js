import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {ListItem} from "react-native-elements";
import { observer } from 'mobx-react';


const LogsScreen = observer(({ route}) => {
  const logs = route.params

  console.log("LogsScreen: " + logs.data)

  return (
    <ScrollView style={{flex: 1, flexDirection: "column"}}>
      {logs.data ?
        logs.data.map((item, i) =>
          <ListItem key={i}>
            <Text>{item.data}</Text>
          </ListItem>)
        :
        <Text>Тут пока нет логов</Text>
      }
    </ScrollView>
  )
})

export default LogsScreen;
