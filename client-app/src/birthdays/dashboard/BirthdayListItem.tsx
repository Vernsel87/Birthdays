import React, { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item } from "semantic-ui-react";
import { Birthday } from "../../app/models/birthday";
import { useStore } from "../../app/stores/store";

interface Props {
  birthday: Birthday;
}

export default function BirthdayListItem({ birthday }: Props) {
  const { birthdayStore } = useStore();
  const { deleteBirthday, loading } = birthdayStore;
  const [target, setTarget] = useState("");

  function handleBrthdayDelete(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteBirthday(id);
  }

  return (
    <Item key={birthday.id}>
      <Item.Content>
        <Item.Header as="a">
          {birthday.firstName + " " + birthday.lastName}
        </Item.Header>
        <Item.Meta>Birthday: {birthday.dateOfBirth}</Item.Meta>
        <Item.Meta>Age: {birthday.age}</Item.Meta>
        <Item.Description>
          <div>{birthday.ideas}</div>
          <div>
            {birthday.streetname} {birthday.housenumber}{" "}
            {birthday.housenumberAddition}
          </div>
          <div>
            {birthday.postcode} {birthday.city}
          </div>
        </Item.Description>
        <Item.Extra>
          <Button
            as={Link}
            to={`/birthdays/${birthday.id}`}
            floated="right"
            content="View"
            color="blue"
          />
          <Button
            name={birthday.id}
            loading={loading && target === birthday.id}
            onClick={(e) => handleBrthdayDelete(e, birthday.id)}
            floated="right"
            content="Delete"
            color="red"
          />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
}
