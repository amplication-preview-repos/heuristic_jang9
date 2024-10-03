import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const PincodeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="count" source="count" />
        <NumberInput label="latitude" source="latitude" />
        <BooleanInput label="Live" source="live" />
        <NumberInput label="longitude" source="longitude" />
        <BooleanInput label="NotYetLive" source="notYetLive" />
        <NumberInput step={1} label="pincode" source="pincode" />
        <BooleanInput label="Targeted" source="targeted" />
      </SimpleForm>
    </Create>
  );
};
