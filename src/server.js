import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import usersRoutes from "./routes/users.routes.js";
import restaurantsRoutes from "./routes/restaurants.routes.js";
import buffetRoutes from "./routes/buffet.routes.js";
import hotDrinksRoutes from "./routes/hotDrinks.routes.js";
import coldDrinksRoutes from "./routes/coldDrinks.routes.js";
import sodasRoutes from "./routes/sodas.routes.js";
import sodaBrandRoutes from "./routes/sodaBrand.routes.js";
import sodaNationalityRoutes from "./routes/sodaNationality.routes.js";
import liquorsRoutes from "./routes/liquors.routes.js";
import liquorBrandRoutes from "./routes/liquorBrand.routes.js";
import liquorNationalityRoutes from "./routes/liquorNationality.routes.js";
import winesRoutes from "./routes/wines.routes.js";
import wineBrandRoutes from "./routes/wineBrand.routes.js";
import wineNationalityRoutes from "./routes/wineNationality.routes.js";
import consecutiveRoutes from "./routes/consecutive.routes.js";
import specialtiesRoutes from "./routes/specialties.routes.js";
import tablesRoutes from "./routes/tables.routes.js";
import employeesRoutes from "./routes/employees.routes.js";
import rolesRoutes from "./routes/roles.routes.js";

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


app.use("/api/users", usersRoutes);
app.use("/api/restaurants", restaurantsRoutes);
app.use("/api/buffet", buffetRoutes);
app.use("/api/hotDrinks", hotDrinksRoutes);
app.use("/api/coldDrinks", coldDrinksRoutes);
app.use("/api/sodas", sodasRoutes);
app.use("/api/sodaBrand", sodaBrandRoutes);
app.use("/api/sodaNationality", sodaNationalityRoutes);
app.use("/api/liquors", liquorsRoutes);
app.use("/api/liquorBrand", liquorBrandRoutes);
app.use("/api/liquorNationalities", liquorNationalityRoutes);
app.use("/api/wines", winesRoutes);
app.use("/api/wineBrands", wineBrandRoutes);
app.use("/api/wineNationalities", wineNationalityRoutes);
app.use("/api/consecutives", consecutiveRoutes);
app.use("/api/specialties", specialtiesRoutes);
app.use("/api/tables", tablesRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/roles", rolesRoutes);

export default app;
