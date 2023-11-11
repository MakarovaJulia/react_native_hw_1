import { makeAutoObservable } from 'mobx';
import LogsService from '../modules/logs/LogsService';

export class LogsStore {
  logsModel = null;
  logsService;

  constructor() {
    makeAutoObservable(this);
    this.logsService = new LogsService();
  }

  getLogsObjectFromService = () => {
    const model = this.logsService.getAndPrepareDataForStore();
    this.setLogsModel(model);
  };

  setLogsModel = value => {
    this.logsModel = value;
  };

  actionAdd = value => {
    const model = this.logsService.addLogs(this.logsModel, value);
    this.setLogsModel(model);
  };
}
