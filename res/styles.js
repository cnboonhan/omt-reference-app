import { StyleSheet } from "react-native";
import { getStatusBarHeight } from 'react-native-status-bar-height';

const palette_0 = "white";
const dark_blue = "#043d99";
const normal_blue = '#3577e0';
const light_blue = '#7caeff';

export default styles = StyleSheet.create({

  container: {
    backgroundColor: palette_0,
    marginTop: getStatusBarHeight(),
    flex: 1,
  },

  header: {
    backgroundColor: palette_0,
  },

  footer: {
    backgroundColor: 'green',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },

  headerLeft: {
    backgroundColor: palette_0,
    flex: 1
  },

  headerRight: {
    backgroundColor: palette_0,
    flex: 1
  },

  headerBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' // Need to use both justifyContent and alignItems for centering in both axes

  },

  headerBodyInfo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center' // Need to use both justifyContent and alignItems for centering in both axes
  },

  headerTextInfoSubtitle: {
    color: 'black',
    fontSize: 25

  },

  headerText: {
    color: 'black'
  },

  content: {
    backgroundColor: 'white'
  },

  sectionTitleText: {

    fontSize: 12,
    color: 'white',
    fontWeight: 'bold'
  },

  sectionHeaderStyle: {

    justifyContent: 'center',
    backgroundColor: dark_blue,
  },

  subSectionHeaderStyle: {

    justifyContent: 'center',
    backgroundColor: normal_blue,
  },

  subSubSectionHeaderStyle: {

    justifyContent: 'center',
    backgroundColor: light_blue,
  },

  listItem: {
    backgroundColor: 'white',
    padding: 5
  },

  listItemText: {
    fontSize: 14,
    // fontWeight: 'bold'
  },

  accordionHeader: {
    // backgroundColor: '#3577e0'
    backgroundColor: dark_blue,
  },

  accordionContent: {
  }
});