import { users } from "../models/user.model.js";

export const userService = {
  getAll() {
    return users;
  },

  getById(id) {
    return users.find((u) => u.id === id);
  },

  create(data) {
    const user = { id: users.length + 1, ...data };
    users.push(user);
    return user;
  },
};
