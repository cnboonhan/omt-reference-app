import React from "react";
import { Container, Button, Content, Grid, Col, Row, Text, Accordion, Title, Header, Body, Subtitle } from 'native-base';
import { Image, ScrollView } from 'react-native';
import { AppLoading } from "expo";
import * as Font from 'expo-font'
import * as FileSystem from 'expo-file-system'

import { loadDB } from '../utils/loadDB.js'

/* 
PROBLEM: Top of <Header> overlaps with status bar
SOLUTION: Forced Padding in Stylesheet for component
REF: https://github.com/GeekyAnts/NativeBase/issues/899
*/
import styles from "../res/styles.js"
import AccordionCustomHeaderContent from "./AccordionHeaderCustomContent.js";

export default class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFontsReady: false,
      isAppReady: false,
      frontpage: { title: "Oberg, Manske & Tonkin Classification", info: [{ title: "", content: "" }], 
          images: ["https://firebasestorage.googleapis.com/v0/b/omtproject-ea9a6.appspot.com/o/credits.png?alt=media&token=4669988c-b61f-438c-bafd-ecbe491bc7c0"]
		}
    };
  }

  async componentWillMount() {

    /*
    PROBLEM: Fonts used before they are loaded
    SOLUTION: Async task with callback to load component when ready
    REF: https://github.com/GeekyAnts/NativeBase/issues/1466
    */

    await Font.loadAsync({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require("../node_modules/native-base/Fonts/Ionicons.ttf"),
    });

    this.setState({ isFontsReady: true })

    //Load Database from JSON file

    if (!global.omt_db) {
      console.log("Loading Database.")
      loadDB().then(() => {
        FileSystem.readAsStringAsync(filePath).then(db => {
          global.omt_db = JSON.parse(db)
          console.log("Successfully Loaded Database.")
          this.setState({ isAppReady: true })
          this.setState({ frontpage: global.omt_db["FRONTPAGE"] })
        })
      });
    } else {
      console.log("Already Loaded Firebase Database.")
      this.setState({ isAppReady: true })
    }

	// Image sizing for credits
	Image.getSize(this.state.frontpage.images[0], (credits_width, credits_height) => {
		this.setState({ credits_width, credits_height });
		});
	}

  render() {
    if (!this.state.isFontsReady) {
      return (
        <AppLoading />
      )
    }
    else {
      if (!this.state.isAppReady) {
        buttonText = "Loading App... (Requires Internet)"
      } else {
        buttonText = "Click to Enter"
      }
      return (
        <Container style={styles.container}>

          <Header span hasSubtitle style={styles.header}>
            <Body style={styles.headerBody}>
              <Title style={styles.headerText}>Oberg, Manske and Tonkin</Title>
              <Subtitle style={styles.headerText}>Classification of Congenital Anomalies of the Hand and Upper Limb</Subtitle>
            </Body>
          </Header>

          <Content>
            {/* <Accordion headerStyle={styles.accordionHeader} contentStyle={styles.accordionContent} dataArray={this.state.frontpage.info} expanded={0} /> */}
            <AccordionCustomHeaderContent dataArray={this.state.frontpage.info} expanded={0}></AccordionCustomHeaderContent>
			<ScrollView>
				<Image
					style={{width: this.state.credits_width, 
					        height: this.state.credits_height}}
					source={{uri: this.state.frontpage.images[0]}}
				/>
			</ScrollView>
          </Content>

          <Button full onPress={() => (this.state.isAppReady) ? this.props.navigation.navigate("Tabs") : void (0)}>
            <Text style={styles.buttonText} disabled={!this.state.isAppReady}>{buttonText}</Text>
          </Button>
        </Container>

      );
    }
  }
}
