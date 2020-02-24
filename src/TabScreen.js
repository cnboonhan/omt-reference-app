import React, { Component } from "react";
import { Container, Text, Tabs, Tab } from "native-base";

import SearchTab from './SearchTab'
import HelpTab from './HelpTab'

export default class TabScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <Tabs tabBarPosition={'bottom'}>
          <Tab heading="Search">
            <SearchTab navigation={this.props.navigation} />
          </Tab>
          <Tab heading="Help">
              <HelpTab navigation={this.props.navigation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
