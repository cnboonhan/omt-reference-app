import React from "react";
import { Container, Header, Title, Left, Right, Body, Subtitle, Content, Accordion, Button, Text } from 'native-base';
import ImageSlider from 'react-native-image-slider';
import AccordionCustomHeaderContent from "./AccordionHeaderCustomContent";

export default class InfoScreen extends React.Component {

  constructor(props) {
    super(props)
    placeholder_item = { title: "Condition", code: "Code", tags: ["tag1", "tag2"], images: ["https://firebasestorage.googleapis.com/v0/b/omtproject-ea9a6.appspot.com/o/Awaiting-Image2.png?alt=media&token=baf2d3bc-0b1f-4899-8040-670e9b80f69c"], info: [{ title: "Title", content: "Content" }] }

    // Get omt_db from the nagivation from IntroScreen
    //data = this.props.navigation.getParam('data', placeholder_item);
    let { data } = this.props.route.params;
    this.state = { title: data.title, code: data.code, info: data.info, images: data.images }
  }

  render() {
    console.log(this.state.images)
    return (
      <Container style={styles.container}>
        <Button full onPress={() => this.props.navigation.pop()}>
          <Text style={styles.buttonText} disabled={!this.state.isAppReady}>search OMT</Text>
        </Button>
        <Header style={styles.header} hasSubtitle>
          <Body style={styles.headerBodyInfo}>
            <Title style={styles.headerText}>{this.state.title}</Title>
            <Subtitle style={styles.headerTextInfoSubtitle}>{this.state.code}</Subtitle>
          </Body>
        </Header>
        <Content>
          <ImageSlider
            style={{
              flex: 3,
              flex: 0, // Hacky way to force a fixed image
              resizeMode: 'cover',
              height: 300,
              width: '100%',
            }}

            images={this.state.images}
          />
          <AccordionCustomHeaderContent dataArray={this.state.info} expanded={0} />

        </Content>
      </Container>
    );
  }
}
