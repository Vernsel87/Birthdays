
import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button, Form, Segment } from "semantic-ui-react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { v4 as uuid } from 'uuid';

import { useStore } from "../../app/stores/store";



export default observer(function BirthdayForm() {
  const history = useHistory();
  const {birthdayStore} = useStore();
  const {  createBirthday, loading, updateBirthday, loadBirthday, loadingInitial} = birthdayStore;
  const {id} = useParams<{id: string}>();
  const [birthday, setBirthday] = useState(
    {
      id: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    age: 0,
    streetname: "",
    housenumber: "",
    housenumberAddition: "",
    postcode: "",
    city: "",
    ideas: "",
    }
  );

    useEffect(()=>{
      if(id) loadBirthday(id).then(birthday => setBirthday(birthday!));
    }, [id, loadBirthday]);

  

  function handleSubmit  () {
    if(birthday.id.length === 0 ){
      let newBirthday = {
        ...birthday,
        id: uuid()
      };
      createBirthday(newBirthday).then(()=> history.push(`/birthdays/${newBirthday.id}`));
    } else {
      updateBirthday(birthday).then(()=>history.push(`/birthdays/${birthday.id}`));
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setBirthday({ ...birthday, [name]: value });
  }

  if(loadingInitial) return <LoadingComponent content="Loading Birthday . . ." />;

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input placeholder="First Name" value={birthday.firstName} name='firstName' onChange={handleInputChange}  />
        <Form.Input placeholder="Last Name" value={birthday.lastName} name='lastName' onChange={handleInputChange} />
        <Form.Input type="date" placeholder="Date of Birth" value={birthday.dateOfBirth} name='dateOfBirth' onChange={handleInputChange} />
        <Form.TextArea placeholder="Gift Ideas" value={birthday.ideas} name='ideas' onChange={handleInputChange} />
        <Form.Input placeholder="Street Name" value={birthday.streetname} name='streetname' onChange={handleInputChange} />
        <Form.Input placeholder="Housenumber" value={birthday.housenumber} name='housenumber' onChange={handleInputChange} />
        <Form.Input placeholder="Housenumber Addition" value={birthday.housenumberAddition} name='housenumberAddition' onChange={handleInputChange} />
        <Form.Input placeholder="Post Code" value={birthday.postcode} name='postcode' onChange={handleInputChange} />
        <Form.Input placeholder="City" value={birthday.city} name='city' onChange={handleInputChange} />
        <Button loading={loading} floated="right" positive type="submit" content="Submit"  />
        <Button
          as={Link}
          to="/birthdays"
          
          floated="right"
          type="submit"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
})



