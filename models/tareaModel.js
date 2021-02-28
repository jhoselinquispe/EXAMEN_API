import mongoose from "../connection/connect.js";
class TareaModel {
    constructor (){
    var Scheme =mongoose.Schema;
    this.tareaSchema = new Schema({
        name: String,
        description: String,
        endpoint: String,
        });
    }
}
