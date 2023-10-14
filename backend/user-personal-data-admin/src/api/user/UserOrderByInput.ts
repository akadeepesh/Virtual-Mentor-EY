import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  education?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  languages?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  skills?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
