import express from "express";
import IndexController from "../controller/indexController.js";
import UserController from "../controller/userController.js";
import RolesController from "../controller/rolesContoller.js";
import JsonWebTokenManagement from "../middleware/JsonWebTokenManagement.js";
import ToDoController from ".../controller/ToDoContoller.js";
import TareaController from "../controller/tareaController.js";
var tareaController = new TareaController();
var router = express.Router();
var indexControler = new IndexController();
var userController = new UserController();
var rolesController = new RolesController();
var jsonwebtokenmanagement = new JsonWebTokenManagement();
var ToDoContoller = new ToDoContoller ();
/* GET home page. */
/**
 * Endpoints de los usuarios
 * // Servicios de los usuarios
 */
router.get("/", indexControler.index);
router.post("/login", indexControler.login);
/**
 * SERVICIO PROTEGIDO
 */
router.get("/user", userController.getUsers);
/* FIN DE SERVICIO PROTEGIDO */
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);
router.post("/addRol", userController.addRol);
router.post("/uploadAvatar/:id", userController.uploadAvatar);
router.get("/showavatar/:name", userController.getAvatar);

/* GET home page. */
/**
 * Endpoints de los usuarios
 * // Servicios de los ROLES
 */
router.post("/roles", rolesController.createRol);
router.get("/roles", rolesController.getRol);
router.get("/roles/:key", rolesController.getRol);
router.put("/roles/:id", rolesController.updateRol);
router.delete("/roles/:id", rolesController.deleteRol);
  // SERVICIOS DE TAREASÇ
router.put("/ToDo/:id", userController.updateUser);
router.delete("/ToDo/:id", userController.deleteUser);
router.post("/addToDo", userController.addToDo);
router.put("/tarea/:id", tareaController.createTarea);
/* 
Implemente 
*/


export default router;
