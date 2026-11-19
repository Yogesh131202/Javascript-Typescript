import { users, User } from "../models/user.model";

export const userService = {
  getAll(): User[] {
    return users;
  },

  getById(id: number): User | undefined {
    return users.find((u) => u.id === id);
  },

  create(data: Omit<User, "id">): User {
    const user: User = { id: users.length + 1, ...data };
    users.push(user);
    return user;
  },
};
