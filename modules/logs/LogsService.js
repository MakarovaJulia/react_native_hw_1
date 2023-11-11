import LogsRepository from './LogsRepository';
import { LogsModel } from './LogsModel';

export default class LogsService {
  logsRepository;

  constructor() {
    this.logsRepository = new LogsRepository();
  }

  getAndPrepareDataForStore = () => {
    const data = this.logsRepository.getData();
    const model = new LogsModel();
    model.logs = data.logs;
    return model;
  };

  addLogs = (model, data) => {
    model.logs.push({ data: data });
    return model;
  };
}
