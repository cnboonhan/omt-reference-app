import React, { Component } from "react";
import { Container, Header, Content, Icon, Accordion, Text, View } from "native-base";
import Hyperlink from 'react-native-hyperlink'

export default class AccordionCustomHeaderContent extends Component {
  _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#043d99"
      }}>
        <Text style={{ fontWeight: "300", color: "white" }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18, color: "white" }} name="remove-circle" />
          : <Icon style={{ fontSize: 18, color: "white" }} name="add-circle" />}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <Hyperlink linkDefault={true} linkStyle={ { color: '#2980b9', fontSize: 15 } }>
        <Text
          style={{
            backgroundColor: "white",
            padding: 10,
          }}
        >
          {item.content}
        </Text>
      </Hyperlink>
    );
  }
  render() {
    return (

      <Accordion
        dataArray={this.props.dataArray}
        animation={true}
        expanded={this.props.expanded}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
    );
  }
}
<br />