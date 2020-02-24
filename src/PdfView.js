import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'
import Constants from 'expo-constants'

export default class PdfView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <WebView
          bounces={false}
          scrollEnabled={false} 
          source={{ uri: 'https://drive.google.com/open?id=1E_UcqyM2WlGlchJ_j2Y9kp-mQwn6yS0S' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
