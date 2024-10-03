import { SortOrder } from "../../util/SortOrder";

export type PincodeOrderByInput = {
  count?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  live?: SortOrder;
  longitude?: SortOrder;
  notYetLive?: SortOrder;
  pincode?: SortOrder;
  targeted?: SortOrder;
  updatedAt?: SortOrder;
};
