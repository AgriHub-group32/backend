import { user } from "@prisma/client";
import "express";


declare module "express" {
  export interface Request {
    user?: user;
  }
}
