import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PincodeList } from "./pincode/PincodeList";
import { PincodeCreate } from "./pincode/PincodeCreate";
import { PincodeEdit } from "./pincode/PincodeEdit";
import { PincodeShow } from "./pincode/PincodeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"PincodeService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Pincode"
          list={PincodeList}
          edit={PincodeEdit}
          create={PincodeCreate}
          show={PincodeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
