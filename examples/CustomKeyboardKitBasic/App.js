import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NativeModules,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import { 
  CustomTextInput,
  register,
  insertText,
  backSpace,
  uninstall,
  hideKeyboard,
} from 'react-native-custom-keyboard-kit';

class MyKeyboard extends Component {
  onPress1 = () => {
    insertText(this.props.tag, '1');
  }

  onPress2 = () => {
    insertText(this.props.tag, '2');
  }

  onPress3 = () => {
    insertText(this.props.tag, '3');
  }
  
  onPress4 = () => {
    insertText(this.props.tag, '4');
  }

  onPress5 = () => {
    insertText(this.props.tag, '5');
  }
  
  onPress6 = () => {
    insertText(this.props.tag, '6');
  }

  onPress7 = () => {
    insertText(this.props.tag, '7');
  }

  onPress8 = () => {
    insertText(this.props.tag, '8');
  }

  onPress9 = () => {
    insertText(this.props.tag, '9');
  }
  
  onPressBackSpace = () => {
    backSpace(this.props.tag);
  }
  
  onPress0= () => {
    insertText(this.props.tag, '0');
  }
  
  onPressHideKeyboard = () => {
    hideKeyboard(this.props.tag);
  }

  render() {
    return (
      <View>
        <View style={{flexDirection: "row"}}>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress1}>
              <Text style={styles.buttonLabel}>
                1
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress2}>
              <Text style={styles.buttonLabel}>
                2
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress3}>
              <Text style={styles.buttonLabel}>
                3
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress4}>
              <Text style={styles.buttonLabel}>
                4
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress5}>
              <Text style={styles.buttonLabel}>
                5
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress6}>
              <Text style={styles.buttonLabel}>
                6
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress7}>
              <Text style={styles.buttonLabel}>
                7
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress8}>
              <Text style={styles.buttonLabel}>
                8
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress9}>
              <Text style={styles.buttonLabel}>
                9
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: "row"}}>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPressBackSpace}>
              <Text style={styles.buttonLabel}>
                &larr;
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPress0}>
              <Text style={styles.buttonLabel}>
                0
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={this.onPressHideKeyboard}>
              <Text style={styles.buttonLabel}>
                &crarr;
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

register('price', () => MyKeyboard);

type Props = {};
export default class App extends Component<Props> {
  state = {
    value: ''
  }

  onChangeText = text => {
    this.setState({value: text});
  }

  render() {
    return (
      <View style={styles.container}>
        <CustomTextInput
          customKeyboardType="price"
          value={this.state.value}
          onChangeText={this.onChangeText}
          style={styles.input}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "grey",
    width: 270,
    fontSize: 19,
  },
  buttonLabel: {
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    padding: 10,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 13,
    paddingBottom: 13,
    fontSize: 20,
  },
  button: {
    width: "33.333333333%",
  },
});
