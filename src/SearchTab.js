import React, { Component } from "react";
import { FlatList, View } from "react-native";
import { Container, Header, Content, Item, Input, Text, ListItem, Icon, List, Left, Body, Right, Title } from "native-base";
import styles from "../res/styles";

export default class SearchTab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      omt_db: global.omt_db,
      searchText: ""
    }
  }


  // item is an array of two items, item[0] is the (Name, Code) pair, item[1] is the content in the info screen
  renderItem = ({ item }) => {
    title = item[1].title
    code = item[1].code
    info = item[1].info
    tags = item[1].tags.join('-').toLowerCase()

    searchFound = tags.indexOf(this.state.searchText) > -1

    if (this.state.searchText.length == 0 || searchFound) {
      return (
        <ListItem style={styles.listItem}
          onPress={() => this.props.navigation.navigate("Info", { data: item[1] })}>
          <Left><Text style={styles.listItemText}>{title}</Text></Left><Body><Text style={styles.listItemText}></Text></Body><Right><Text style={styles.listItemText}>{code}</Text></Right></ListItem>
      )
    } else {
      return (
        <View />
      )
    }
  }

  // Separate logic for rendering each section header for each reference
  renderSectionHeader = (titles) => {
    if (!titles) {
      return (
        <List></List>
      )
    }
    if (titles[2]) {
      return (
        <List>
          <ListItem itemDivider style={styles.sectionHeaderStyle}><Text style={styles.sectionTitleText}>{titles[0]}</Text></ListItem>
          <ListItem itemDivider style={styles.subSectionHeaderStyle}><Text style={styles.sectionTitleText}>{titles[1]}</Text></ListItem>
          <ListItem itemDivider style={styles.subSubSectionHeaderStyle}><Text style={styles.sectionTitleText}>{titles[2]}</Text></ListItem>
        </List>
      )
    } else if (titles[1]) {
      return (
        <List>
          <ListItem itemDivider style={styles.sectionHeaderStyle}><Text style={styles.sectionTitleText}>{titles[0]}</Text></ListItem>
          <ListItem itemDivider style={styles.subSectionHeaderStyle}><Text style={styles.sectionTitleText}>{titles[1]}</Text></ListItem>
        </List>
      )
    } else {
      return (
        <List>
          <ListItem itemDivider style={styles.sectionHeaderStyle}><Text style={styles.sectionTitleText}>{titles[0]}</Text></ListItem>
        </List>
      )
    }
  }

  // combined logic for rendering section headers and contents together
  renderSection = (section) => {
    if (!this.state.omt_db[section]) { // Check if the entry exists, if not do not try to render it
      return <View></View>
    } else {
      conditions = Object.entries(this.state.omt_db[section].conditions)
      listIsEmpty = false
      for (i = 0; i < conditions.length; i++) {
        tags = conditions[i][1].tags.join('-').toLowerCase()
        searchFound = tags.indexOf(this.state.searchText) > -1
        if (searchFound) {
          listIsEmpty = false
          break
        } else {
          listIsEmpty = true
        }
      }
      if (listIsEmpty) {
        return (
          <View></View>
        )
      } else {
        return (
          <View>
            {this.renderSectionHeader(this.state.omt_db[section].labels)}
            <FlatList
              data={Object.entries(this.state.omt_db[section].conditions)}
              renderItem={this.renderItem}
              keyExtractor={(item) => item[0]}
            />
          </View>
        )
      }
    }
  }

  render() {
    return (
      <Container>

        <Header style={styles.header}>
          <Item style={styles.headerBody}>
            <Title style={styles.headerText}>Search</Title>
          </Item>
        </Header>

        <Header searchBar rounded style={styles.header}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Name / Description of Condition" onChangeText={(input) => this.setState({ searchText: input.toLowerCase() })} />
          </Item>
        </Header>

        <Content>
          {/* {Object.keys(this.state.omt_db).map((key) => {return this.renderSection(key)})}  */}
          {/*PROBLEM: Causes Unique Key Error Warning. SOLUTION: Manual Copy-Paste for now.*/}
          {this.renderSection("OMT_1")}
          {this.renderSection("OMT_2")}
          {this.renderSection("OMT_3")}
          {this.renderSection("OMT_4")}
          {this.renderSection("OMT_5")}
          {this.renderSection("OMT_6")}
          {this.renderSection("OMT_7")}
          {this.renderSection("OMT_8")}
          {this.renderSection("OMT_9")}
          {this.renderSection("OMT_10")}
          {this.renderSection("OMT_11")}
          {this.renderSection("OMT_12")}
          {this.renderSection("OMT_13")}
          {this.renderSection("OMT_14")}
          {this.renderSection("OMT_15")}
          {this.renderSection("OMT_16")}
          {this.renderSection("OMT_17")}
          {this.renderSection("OMT_18")}
        </Content>
      </Container>
    );
  }
}
