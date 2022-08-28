import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Birthday } from "../../app/models/birthday";


interface Props {
  birthday: Birthday;
}

export default function BirthdayListItem({ birthday }: Props) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/assets/user.png" />
            <Item.Content>
              <Item.Header as={Link} to={`/birthdays/${birthday.firstName}`}>
                {birthday.firstName + " " + birthday.lastName}
              </Item.Header>
              <Item.Description> Gift ideas</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
           <span>
            <Icon name='calendar' /> {birthday.dateOfBirth}
            <Icon name="marker"  /> {birthday.city} 
           </span>
      </Segment>
      <Segment secondary >
        Wishlist goes here.
      </Segment>
      <Segment clearing>
      <Button as={Link} 
        to={`/birthdays/${birthday.id}`} 
        color='teal' 
        floated="right"        
        content='View'
        />
      </Segment>
    </Segment.Group>
  );
}
