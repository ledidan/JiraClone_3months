import { baseService } from "./baseService";

export class TaskService extends baseService {
  constructor() {
    super();
  }
  createTask = (taskObject) => {
    return this.post("Project/createTask", taskObject);
  };
  getTaskDetail = (idTask) => {
    return this.get(`Project/getTaskDetail?taskId=${idTask}`);
  };
  updateStatusTask = (taskStatusUpdate) => {
    return this.put(`Project/updateStatus`, taskStatusUpdate);
  };
  upDateTask = (taskUpdate) => {
    return this.post(`Project/updateTask`, taskUpdate);
  };
}

export const taskService = new TaskService();