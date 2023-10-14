import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  education?: Array<"Btech">;
  firstName?: string | null;
  languages?: Array<"Hindi">;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  skills?: Array<"Skills">;
  state?: string | null;
  username: string;
};
