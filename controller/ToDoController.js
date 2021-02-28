import ToDoModel from "../models/ToDoModel.JS";
import UserController from "./userController";
class ToDoCOntroller {
    constructor() {}
    //services
    async createToDo(request, response) {
        var data = resquest.body;
        var user = new ToDoModel();
        var result = await user.createToDo();
        user.createToDo
        (data.name,
        data.description,
        data.date,
        data.hour,
        data.done, 
        new Date(),
        data.age   
        );
        response.status(200).json(result)
    }
    async getToDo(request, response) {
        var result = await user.getToDo();
        response.status(200).json(result);
    }
    async updateToDo(resquest, response){
        var id=request.params;
        var updatedata = resquest.body;
        var result = await ToDo.updateToDo(id, updatedata);
        response.status(200).json(result);
        //http://localhost:8000/ToDo
    }
    async deleteToDo(request, response){
        var id = resquest.params.id;
        var deletedata = resquest.body;
        var result = await ToDo.deleteToDo(id, deletedata);
        response.status(200).json(result);
    }
    async addToDo(req, res) {
        var body = req.body;
        var tarearesult = await roles.getRol(filter);
        if (rolresult.length == 1) {
          var result = await USER.addRol(idus, rolresult[0]);
          res.status(200).json({ serverResponse: result });
          return;
        }
        res.status(200).json({ serverResponse: "EL rol no pudo se asignado" });
      }

}
export default ToDoController;