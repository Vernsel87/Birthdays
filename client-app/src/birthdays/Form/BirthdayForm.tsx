
import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

import { useStore } from "../../app/stores/store";



export default observer(function BirthdayForm() {
  const {birthdayStore} = useStore();
  const {selectedBirthday, closeForm, createBirthday, loading, updateBirthday} = birthdayStore;


  const initialState = selectedBirthday ?? {
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
  }; 
  const [birthday, setBirthday] = useState(initialState);

  function handleSubmit  () {
    birthday.id ? updateBirthday(birthday) : createBirthday(birthday);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setBirthday({ ...birthday, [name]: value });
  }

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
          onClick={()=>closeForm()}
          floated="right"
          type="submit"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
})



