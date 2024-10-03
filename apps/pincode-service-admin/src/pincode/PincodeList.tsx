import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const PincodeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Pincodes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="count" source="count" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="latitude" source="latitude" />
        <BooleanField label="Live" source="live" />
        <TextField label="longitude" source="longitude" />
        <BooleanField label="NotYetLive" source="notYetLive" />
        <TextField label="pincode" source="pincode" />
        <BooleanField label="Targeted" source="targeted" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
