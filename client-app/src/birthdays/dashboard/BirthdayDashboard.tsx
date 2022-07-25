import React from "react";
import { Grid } from "semantic-ui-react";
import BirthdayList from "./BirthdayList";
import BirthdayDetails from "../details/BirthdayDetails";
import BirthdayForm from "../Form/BirthdayForm";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";


export default observer(function BirthdayDashboard() {
  const { birthdayStore } = useStore();
  const {selectedBirthday, editMode} = birthdayStore;
  return (
    <Grid>
      <Grid.Column width="10">
        <BirthdayList />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedBirthday && (
          <BirthdayDetails />
        )}

        {editMode && (
          <BirthdayForm />
        )}
      </Grid.Column>
    </Grid>
  );
})
