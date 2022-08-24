import React from "react";
import "./styles.css";
import { Container } from "semantic-ui-react";
import NavBar from "./layout/NavBar";
import BirthdayDashboard from "../birthdays/dashboard/BirthdayDashboard";

import { observer } from "mobx-react-lite";
import { Route, useLocation } from "react-router-dom";
import HomePage from "../home/HomePage";
import BirthdayForm from "../birthdays/Form/BirthdayForm";
import BirthdayDetails from "../birthdays/details/BirthdayDetails";

function App() {
  const location = useLocation();

  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Route exact path="/birthdays" component={BirthdayDashboard} />
              <Route path="/birthdays/:id" component={BirthdayDetails} />
              <Route
                key={location.key}
                path={["/createBirthday", "/manage/:id"]}
                component={BirthdayForm}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
