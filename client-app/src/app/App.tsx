import React, { useEffect } from "react";
import "./styles.css";
import { Container } from "semantic-ui-react";
import NavBar from "./layout/NavBar";
import BirthdayDashboard from "../birthdays/dashboard/BirthdayDashboard";
import LoadingComponent from "./layout/LoadingComponent";
import { useStore } from "./stores/store";
import { observer } from "mobx-react-lite";

function App() {
  const { birthdayStore } = useStore();

  useEffect(() => {
    birthdayStore.loadBirthdays();
  }, [birthdayStore]);

  if (birthdayStore.loadingInitial) return <LoadingComponent />;

  return (
    <>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <BirthdayDashboard />
      </Container>
    </>
  );
}

export default observer(App);
