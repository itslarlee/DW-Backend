import express from "express";
import mongoose from "mongoose";
import mascotaRoutes from "./routers/mascota.js";
import cors from "cors";

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/ProyectoFinal")
  .then(() => {
    console.log("Conexión exitosa a MongoDB");
  })
  .catch((error) => {
    console.log("Error al conectarse a MongoDB: ", error);
  });

app.use(cors());
app.use(express.json());


app.use("/api/mascotas", mascotaRoutes);

export default app;
