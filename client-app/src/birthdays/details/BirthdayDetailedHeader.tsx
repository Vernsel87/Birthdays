import React from "react";
import { observer } from "mobx-react-lite";
import { Button,  Item, Segment, Image } from "semantic-ui-react";
import { Birthday } from "../../app/models/birthday";

const activityImageStyle = {
  filter: "brightness(30%)",
};

const activityImageTextStyle = {
  position: "absolute",
  bottom: "5%",
  left: "5%",
  width: "100%",
  height: "auto",
  color: "white",
};

interface Props {
  birthday: Birthday;
}
export default observer(function BirthdayDetailedHeader({ birthday }: Props) {
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image
          src={`/assets/user.png`}
          style={activityImageStyle}
          size='medium'
        /> 
        <Segment style={activityImageTextStyle} basic>
          <Item.Group>
            <Item>
              <Item.Content>
                <p>Date of birth: {birthday.dateOfBirth}</p>
                <p>
                  <strong>{birthday.lastName  + ' ' + birthday.lastName}</strong>
                </p>
                <p>Age: {birthday.age}</p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>
      <Segment clearing attached="bottom">
      <Button color="red" floated="right">
            Delete Birthday
        </Button>
        <Button color="orange" floated="right">
          Edit Birthday
        </Button>       
      </Segment>
    </Segment.Group>
  );
});
