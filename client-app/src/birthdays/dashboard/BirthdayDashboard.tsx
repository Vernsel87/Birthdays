import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import BirthdayList from "./BirthdayList";
import { useStore } from "../../app/stores/store";
import { observer } from "mobx-react-lite";
import LoadingComponent from "../../app/layout/LoadingComponent";
import BirthdayFilters from "./BirthdayFilters";

export default observer(function BirthdayDashboard() {
  const { birthdayStore } = useStore();
  const {loadBirthdays, birthdayRegistry} = birthdayStore;

  useEffect(() => {
    if(birthdayRegistry.size  <= 1 ) loadBirthdays();
  }, [birthdayRegistry.size, loadBirthdays]);

  if (birthdayStore.loadingInitial) return <LoadingComponent />;
  return (
    <Grid>
      <Grid.Column width="10">
        <BirthdayList />
      </Grid.Column>
      <Grid.Column width="6">
        <BirthdayFilters />
      </Grid.Column>
    </Grid>
  );
});
