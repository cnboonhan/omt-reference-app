import { createStackNavigator, createAppContainer } from "react-navigation";
import InfoScreen from './src/InfoScreen';
import IntroScreen from './src/IntroScreen';
import TabScreen from './src/TabScreen';
import PdfView from './src/PdfView'
const AppNavigator = createStackNavigator(
  {
    Intro: IntroScreen,
    Info: InfoScreen,
    Tabs: TabScreen,
    Pdf: PdfView,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
    initialRouteName: "Intro",
  });

export default createAppContainer(AppNavigator);
