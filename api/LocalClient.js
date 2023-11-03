import { AsyncStorage } from 'react-native';


export default class LocalClient {

  get = async (tableName) => {
    const data = await AsyncStorage.getItem(tableName);
    return data ? JSON.parse(data) : null;
  };

  set = async (tableName, data) => {
    return AsyncStorage.setItem(tableName, JSON.stringify(data));
  };

  removeAll = async (tableName) => {
    return AsyncStorage.removeItem(tableName);
  };

}
