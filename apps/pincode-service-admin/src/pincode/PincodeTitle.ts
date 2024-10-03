import { Pincode as TPincode } from "../api/pincode/Pincode";

export const PINCODE_TITLE_FIELD = "id";

export const PincodeTitle = (record: TPincode): string => {
  return record.id?.toString() || String(record.id);
};
