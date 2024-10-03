import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
} from "react-admin";

export const PincodeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="count" source="count" />
        <NumberInput label="latitude" source="latitude" />
        <BooleanInput label="Live" source="live" />
        <NumberInput label="longitude" source="longitude" />
        <BooleanInput label="NotYetLive" source="notYetLive" />
        <NumberInput step={1} label="pincode" source="pincode" />
        <BooleanInput label="Targeted" source="targeted" />
      </SimpleForm>
    </Edit>
  );
};
