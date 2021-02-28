import mongoose from "../connection/connect.js";
class ToDoModel{
    constructor(){
        this.Schema = mongoose.Schema;
        this.ToDoSchema = new this.Schema({
            name: String,
            description:String,
            date: Date,
            hour: String,
            done: Boolean,
        });this
        .mymodel = mongoose.model("users", this.ToDoSchema);
    }
    createToDo(name, description, date, hour, done){
        var ToDo ={
        name,
        description,
        date, 
        hour,
        done, 
    };
    var newToDo = new this.mymodel(ToDo);
    return new Promise((resolve, reject)=> {
        newToDo.save().then(() => {
            console.log("Agregar tarea");
        });
    });
             
    
    }
    getToDo(){
        return new Promise((resove, reject)=> {
            this.mymodel.find({}, (err, docs)=> {
                if (err){
                    console.log(err);
                    resolve(err);
                    return;
                }
                resolve(docs);
            });
        });
    }
    updateToDo(id, ToDoUpdate){
        return new Promise((resolve, reject)=>{
            this.mymodel.update({_id: id}, {$set: userUpdate }, (err, docs) => {
                if (err){
                    console.log(err);
                    reject(err);
                    return;

                }
                resolve()

            });
        });
    }
    deleteToDo(id){
        return  new Promise((resolve, reject) =>{
            this.mymodel.remove({_id: id }).then((err, docs)=> {
               if (err){
                   console.log(err);
                   resolve(err);
                   return;
               }
               resolve(docs)
            });
        });

    }

    getModel(){
        return this.mymodel;
    }
}
export default ToDoModel;