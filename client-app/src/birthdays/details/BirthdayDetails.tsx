import React from "react";
import { Button, ButtonGroup, Card,  Image } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";


export default function BirthdayDetails() {
  const {birthdayStore} = useStore();
  const {selectedBirthday: birthday, cancelSelectedBirthday, openForm} = birthdayStore;

  if(!birthday) return <></>;

  return (
    <Card>
      <Image
        src={`/assets/user.png`}
      />
      <Card.Content>
        <Card.Header>{birthday.firstName} {birthday.lastName}</Card.Header>
        <Card.Meta>
          <span >Age: {birthday.age}</span>
        </Card.Meta>
        <Card.Description>
            Gift ideas: <br/>
          {birthday.ideas}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
<ButtonGroup >
    <Button basic onClick={()=>openForm(birthday.id)} color='blue' content='Edit' />
    <Button onClick={cancelSelectedBirthday} basic color='grey' content='Cancel' />
</ButtonGroup>
      </Card.Content>
    </Card>
  );
}
