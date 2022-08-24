import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, ButtonGroup, Card,  Image } from "semantic-ui-react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useStore } from "../../app/stores/store";


export default observer( function BirthdayDetails() {
  const {birthdayStore} = useStore();
  const {selectedBirthday: birthday, loadBirthday, loadingInitial} = birthdayStore;
  const {id} = useParams<{id: string}>();

  useEffect(()=>{
    if(id) loadBirthday(id);
  }, [id, loadBirthday]);

  if(loadingInitial || !birthday) return <LoadingComponent />;

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
    <Button  as={Link} to={`/manage/${birthday.id}`}  basic  color='blue' content='Edit' />
    <Button as={Link} to='/birthdays' basic color='grey' content='Cancel' />
</ButtonGroup>
      </Card.Content>
    </Card>
  );
})
