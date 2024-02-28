import express from "express";
import {
    addUser,
    getUsers,
    getUserByID,
    updateUser,
    deleteUser,
} from "../controllers/users.controller.js";

const router = express.Router();

router.post("/", addUser);
router.get("/", getUsers);
router.get("/:userId", getUserByID);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export default router;
