import express from "express";
import ProductController from "../controllers/ProductController"; // Asegúrate de la ruta correcta

const router = express.Router();

router.put("/products/:id", ProductController.editProduct);

router.delete("/products/:id", ProductController.deleteProduct);

router.get("/products", ProductController.filterProducts);

router.post("/products", ProductController.insertProduct);

export default router;
