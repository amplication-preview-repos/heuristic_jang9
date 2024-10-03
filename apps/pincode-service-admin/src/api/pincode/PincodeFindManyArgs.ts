import { PincodeWhereInput } from "./PincodeWhereInput";
import { PincodeOrderByInput } from "./PincodeOrderByInput";

export type PincodeFindManyArgs = {
  where?: PincodeWhereInput;
  orderBy?: Array<PincodeOrderByInput>;
  skip?: number;
  take?: number;
};
