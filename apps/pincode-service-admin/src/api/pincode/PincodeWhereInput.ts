import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PincodeWhereInput = {
  count?: IntNullableFilter;
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  live?: BooleanNullableFilter;
  longitude?: FloatNullableFilter;
  notYetLive?: BooleanNullableFilter;
  pincode?: IntNullableFilter;
  targeted?: BooleanNullableFilter;
};
