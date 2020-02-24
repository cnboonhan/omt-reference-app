import React, { Component } from "react";
import { Container, Header, Content, Text, ListItem, List, Title, Body } from "native-base";
import * as WebBrowser from 'expo-web-browser';

import styles from "../res/styles";

export default class HelpTab extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Body style={styles.headerBody}>
            <Title style={styles.headerText}>Help</Title>
          </Body>
        </Header>
        <Content>
        <List button={true}>
          <ListItem onPress={() => this.props.navigation.navigate("Pdf")}><Text>Download OMT Classification as PDF</Text></ListItem>
          <ListItem onPress={() => WebBrowser.openBrowserAsync('https://youtu.be/gee8lxM03s0')}><Text>View App Tutorial on Youtube</Text></ListItem>
        </List>
        </Content>
      </Container>
    );
  }
}
