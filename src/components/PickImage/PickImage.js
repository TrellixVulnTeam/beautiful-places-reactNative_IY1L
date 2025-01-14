import React, { Component } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

class PickImage extends Component {
  state = {
    pickedImage: null
  };

  pickImageHandler = () => {
    ImagePicker.showImagePicker({ title: 'Pick an Image' }, res => {
      if (res.didCancel) {
        console.log('User Cancelled');
      } else if (res.error) {
        console.log('Error Occured: ', res.error);
      } else {
        this.setState({
          pickedImage: {
            uri: res.uri
          }
        });
        this.props.onImagePick({ uri: res.uri, base64: res.data });
      }
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.placeholder}>
          <Image style={{ flex: 1 }} source={this.state.pickedImage} />
        </View>
        <View style={styles.buttons}>
          <Button title="Pick Image" onPress={this.pickImageHandler} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  placeholder: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#eee',
    width: '80%',
    height: 150
  },
  buttons: {
    margin: 8
  }
});

export default PickImage;
