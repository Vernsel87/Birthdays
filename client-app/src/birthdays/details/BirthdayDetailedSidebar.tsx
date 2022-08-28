import React from "react";
import {
  Segment,
  List,
  Label,
  Item,
  Icon,
  SegmentGroup,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

export default observer(function BirthdayDetailedSidebar() {
  return (
    <>
      <SegmentGroup>
        <Segment
          textAlign="center"
          style={{ border: "none" }}
          attached="top"
          secondary
          inverted
          color="teal"
        >
          Shops
        </Segment>
        <Segment attached>
          <List relaxed divided>
            <Item style={{ position: "relative" }}>
              <Label
                style={{ position: "absolute" }}
                color="blue"
                ribbon="right"
              >
                Gift shops
              </Label>
              <Icon name="shopping bag" size="huge" color="orange" />
              <Item.Content verticalAlign="middle">
                <Item.Header as="h3">
                  <Link to={`#`}>Shopname 1</Link>
                </Item.Header>
                <Item.Extra style={{ color: "orange" }}>URL website</Item.Extra>
              </Item.Content>
            </Item>

            <Item style={{ position: "relative" }}>
              <Icon name="shopping bag" size="huge" color="orange" />
              <Item.Content verticalAlign="middle">
                <Item.Header as="h3">
                  <Link to={`#`}>Shopname 2</Link>
                </Item.Header>
                <Item.Extra style={{ color: "orange" }}>URL website</Item.Extra>
              </Item.Content>
            </Item>

            <Item style={{ position: "relative" }}>
              <Icon name="shopping bag" size="huge" color="orange" />
              <Item.Content verticalAlign="middle">
                <Item.Header as="h3">
                  <Link to={`#`}>Shopname 3</Link>
                </Item.Header>
                <Item.Extra style={{ color: "orange" }}>URL website</Item.Extra>
              </Item.Content>
            </Item>
          </List>
        </Segment>
      </SegmentGroup>
      <SegmentGroup>
        <Segment attached>
          <List relaxed divided>
            <Item style={{ position: "relative" }}>
              <Label
                style={{ position: "absolute" }}
                color="blue"
                ribbon="right"
              >
                Card shops
              </Label>
              <Icon name="shopping bag" size="huge" color="orange" />
              <Item.Content verticalAlign="middle">
                <Item.Header as="h3">
                  <Link to={`#`}>Shopname 1</Link>
                </Item.Header>
                <Item.Extra style={{ color: "orange" }}>URL website</Item.Extra>
              </Item.Content>
            </Item>

            <Item style={{ position: "relative" }}>
              <Icon name="shopping bag" size="huge" color="orange" />
              <Item.Content verticalAlign="middle">
                <Item.Header as="h3">
                  <Link to={`#`}>Shopname 2</Link>
                </Item.Header>
                <Item.Extra style={{ color: "orange" }}>URL website</Item.Extra>
              </Item.Content>
            </Item>

            <Item style={{ position: "relative" }}>
              <Icon name="shopping bag" size="huge" color="orange" />
              <Item.Content verticalAlign="middle">
                <Item.Header as="h3">
                  <Link to={`#`}>Shopname 3</Link>
                </Item.Header>
                <Item.Extra style={{ color: "orange" }}>URL website</Item.Extra>
              </Item.Content>
            </Item>
          </List>
        </Segment>
      </SegmentGroup>
    </>
  );
});
