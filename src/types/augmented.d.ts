import { user } from "../generated/prisma/index.js";
import "express";


declare module "express" {
  export interface Request {
    user?: user;
  }
}
