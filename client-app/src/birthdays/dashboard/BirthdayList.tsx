import { observer } from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import { Button,  Item,  Segment } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';

export default observer(function BirthdayList(){
    const {birthdayStore} = useStore();
    const {deleteBirthday, birthdaysByDate, loading} = birthdayStore;
    const [target, setTarget] = useState("");

    function handleBrthdayDelete(e: SyntheticEvent<HTMLButtonElement>, id: string ){
        setTarget(e.currentTarget.name);
        deleteBirthday(id);
    }
    return (
        <Segment >
            <Item.Group divided>
                {birthdaysByDate.map(birthday => (
                    <Item key={birthday.id} >
                        <Item.Content>
                            <Item.Header as='a'>{birthday.firstName+ ' '  + birthday.lastName }</Item.Header>
                            <Item.Meta>Birthday: {birthday.dateOfBirth}</Item.Meta>
                            <Item.Meta>Age: {birthday.age}</Item.Meta>
                            <Item.Description>
                                <div>
                                {birthday.ideas}
                                </div>
                                <div>
                                    {birthday.streetname} {birthday.housenumber} {birthday.housenumberAddition}
                                </div>
                                <div>
                                    {birthday.postcode}  {birthday.city}
                                </div>
                                </Item.Description>
                                <Item.Extra>
                                    <Button onClick={()=> birthdayStore.selectBirthday(birthday.id)} floated='right' content="View" color="blue" />
                                    <Button 
                                    name={birthday.id}
                                    loading={loading && target === birthday.id} onClick={(e)=> handleBrthdayDelete(e, birthday.id)} floated='right' content="Delete" color="red" />
                                </Item.Extra>
                        </Item.Content>
                    </Item> 
                ))}
            </Item.Group>
        </Segment>
    );
})