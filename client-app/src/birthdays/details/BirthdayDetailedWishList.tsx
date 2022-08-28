import React from "react";
import { observer } from "mobx-react-lite";
import { List, Item, Segment, Header, SegmentGroup } from "semantic-ui-react";
import { relative } from "path";

export default observer(function BirthdayDetailedWishList() {
  return (
    <SegmentGroup>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        Wishlist
      </Segment>
      <Segment attached>
        <List relaxed divided>
          <Item style={{position: relative}}>
            <Header>Item 1</Header>
          </Item>
          <Item style={{position: relative}}>
            <Header>Item 2</Header>
          </Item>
        </List>
      </Segment>
    </SegmentGroup>
  );
});
