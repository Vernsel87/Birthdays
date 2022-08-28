import { observer } from "mobx-react-lite";
import React from "react";
import { Segment, Grid, Icon } from "semantic-ui-react";
import { Birthday } from "../../app/models/birthday";

interface Props {
  birthday: Birthday;
}

export default observer(function BirthdayDetailedInfo({ birthday }: Props) {
  return (
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="yellow" name="lightbulb" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{birthday.ideas}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" color="blue" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span>{birthday.dateOfBirth}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="orange" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span>
              {birthday.city}, {birthday.streetname}, {birthday.housenumber} {birthday.housenumberAddition}
            </span>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  );
});
