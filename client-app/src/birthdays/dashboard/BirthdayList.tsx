import { observer } from "mobx-react-lite";
import { Fragment } from "react";
import { Header, Item, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import BirthdayListItem from "./BirthdayListItem";

export default observer(function BirthdayList() {
  const { birthdayStore } = useStore();
  const { groupedBirthdays } = birthdayStore;

  return (
    <>
      {groupedBirthdays.map(([group, birthdays]) => (
        <Fragment key={group}>
          <Header sub color="teal">
            {group}
          </Header>
          <Segment>
            <Item.Group divided>
              {birthdays.map((birthday) => (
                <BirthdayListItem key={birthday.id} birthday={birthday} />
              ))}
            </Item.Group>
          </Segment>
        </Fragment>
      ))}
    </>
  );
});
