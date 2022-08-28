import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import {  useParams } from "react-router-dom";
import {  Grid } from "semantic-ui-react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useStore } from "../../app/stores/store";
import BirthdayDetailedHeader from "./BirthdayDetailedHeader";
import BirthdayDetailedInfo from "./BirthdayDetailedInfo";
import BirthdayDetailedSidebar from "./BirthdayDetailedSidebar";
import BirthdayDetailedWishList from "./BirthdayDetailedWishList";


export default observer( function BirthdayDetails() {
  const {birthdayStore} = useStore();
  const {selectedBirthday: birthday, loadBirthday, loadingInitial} = birthdayStore;
  const {id} = useParams<{id: string}>();

  useEffect(()=>{
    if(id) loadBirthday(id);
  }, [id, loadBirthday]);

  if(loadingInitial || !birthday) return <LoadingComponent />;

  return (
    <Grid>
      <Grid.Column width={10} >
        <BirthdayDetailedHeader birthday={birthday}/>
        <BirthdayDetailedInfo birthday={birthday} />
        <BirthdayDetailedWishList />
      </Grid.Column>
      <Grid.Column width={6} >
        <BirthdayDetailedSidebar />
      </Grid.Column>
    </Grid>
  );
})
