import LocalClient from './LocalClient';

export default class LocalRepository {

  localClient = null;
  tableName = null;

  constructor(tableName) {
    this.localClient = new LocalClient();
    this.tableName = tableName;
  }

  getItems = () => {
    return this.localClient.get(this.tableName);
  };

  setItems = data => {
    return this.localClient.set(this.tableName, data);
  };

  removeAll = () => {
    return this.localClient.removeAll(this.tableName);
  };

}
