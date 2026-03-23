import { user } from "../generated/prisma/index";
import "express";


declare module "express" {
  export interface Request {
    user?: user;
  }
}
