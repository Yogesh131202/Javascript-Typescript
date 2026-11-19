export interface User {
  id: number;
  name: string;
  email: string;
}

// In-memory store. Replace with a real DB model later.
export const users: User[] = [
  { id: 1, name: "Asha", email: "asha@example.com" },
  { id: 2, name: "Ravi", email: "ravi@example.com" },
];
