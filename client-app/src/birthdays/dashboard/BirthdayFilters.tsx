import React from "react";
import { Calendar } from "react-calendar";
import { Header, Menu } from "semantic-ui-react";

export default function BirthdayFilters(){
    return(
        <>
        <Menu vertical size="large" style={{width: '100%', marginTop: 26}} >
            <Header icon='filter' attached color='teal' content="Filters" />
            <Menu.Item content="All birthdays" />
            <Menu.Item content="Within 2 weeks" />
            <Menu.Item content="Within 2 months" />
        </Menu>
        <Header />
        <Calendar />
        </>
    );  
}