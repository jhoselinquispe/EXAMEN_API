import TareasModel from "../models/tareaModel.js";
var tarea = new TareasModel();
class TareaController{
    contructor(){}
        async createTarea(req, res){
            var body = req.body;
            var result = await tarea.createTarea(body);
            res.status(200).json({ serveResponse: result });
    
        }
        updateTarea(req, res){
            var id = request.params.id;
            var body = req.body;
            var result = tarea.updateTarea(id, body);
            res.status(200).json({ serveResponse: result });
        }
    }
    export default TareaController;
