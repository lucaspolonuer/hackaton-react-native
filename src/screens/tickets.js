import React, {Component} from 'react';
import {PermissionsAndroid, StyleSheet, Text, View, Button} from 'react-native';
import RNTesseractOcr from 'react-native-tesseract-ocr';
const ImagePicker = require("react-native-image-picker");

const tessOptions = {
  whitelist: null,
  blacklist: null
};
type Props = {};
class Tickets extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      uri: '',
      finally: '',
      error: ''
    };
  }

  scanPhoto(imagePath) {
    RNTesseractOcr.recognize(imagePath, 'LANG_SPANISH', tessOptions)
      .then((result) => this.setState({uri: result}))
      .catch((error) => this.setState({error: error}))
      .finally(() => this.setState({finally: 'finallllly'}));
  };

  async requestCameraPermission() {
    const granted = await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.CAMERA,
                                                              PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE])
      .then((result) => {
        console.log('result', result);
      });
    console.log(granted);
  }

  async launchPicker() {
    await this.requestCameraPermission();
    ImagePicker.showImagePicker({}, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = response.path;
        this.scanPhoto(source)
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TICKETS</Text>
        <Button onPress={() => {
            this.launchPicker();
          }}
          title="Escanear imagen" />
          <Text style={styles.title}>{this.state.uri}</Text>
          <Text style={styles.title}>{this.state.finally}</Text>
          <Text>{JSON.stringify(this.state.error)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    bottom: '10%'
  }
});

export default Tickets;