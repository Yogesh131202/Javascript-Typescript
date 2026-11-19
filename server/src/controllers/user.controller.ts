import { Request, Response } from "express";
import { userService } from "../services/user.service";

export const userController = {
  getAll(_req: Request, res: Response) {
    res.json(userService.getAll());
  },

  getById(req: Request, res: Response) {
    const user = userService.getById(Number(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  },

  create(req: Request, res: Response) {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: "name and email are required" });
    }
    res.status(201).json(userService.create({ name, email }));
  },
};
