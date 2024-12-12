import express from "express"
import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js"
import authMiddlrware from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add",authMiddlrware,addToCart)
cartRouter.post("/remove",authMiddlrware,removeFromCart)
cartRouter.post("/get",authMiddlrware,getCart)

export default cartRouter;