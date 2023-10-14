import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  education?: Array<"Btech">;
  firstName: string | null;
  id: string;
  languages?: Array<"Hindi">;
  lastName: string | null;
  roles: JsonValue;
  skills?: Array<"Skills">;
  state: string | null;
  updatedAt: Date;
  username: string;
};
