# react-native-custom-keyboard-kit

![react-native-custom-keyboard-kit](./react-native-custom-keyboard-kit.png)

We will release very soon. Please stay tuned!

## Getting started

`$ npm install react-native-custom-keyboard-kit --save`

### Mostly automatic installation

`$ react-native link react-native-custom-keyboard-kit`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.RNCustomKeyboardKitPackage;` to the imports at the top of the file
  - Add `new RNCustomKeyboardKitPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-custom-keyboard-kit'
  	project(':react-native-custom-keyboard-kit').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-custom-keyboard-kit/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
		compile project(':react-native-custom-keyboard-kit')
  	```

#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-custom-keyboard-kit` and add `RNCustomKeyboardKit.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNCustomKeyboardKit.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<


## Usage

Register a component as a custom keyboard kit:

```
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
```

Use `CustomTextInput` instead of `TextInput`:

```
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
```

### Full usage code

```
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
```

You can find the source code [here](./examples/CustomKeyboardKitBasic).

## API

| Function   |      Description      |
|:----------|:----------|
| register(type, type) | Register a custom keyboard type. |
| install(tag, type) | Install custom keyboard to a `TextInput`. Generally you can use CustomTextInput instead of this. But you can use this API to install/change custom keyboard dynamically. |
| uninstall(tag) | Uninstall custom keyboard from a `TextInput` dynamically. |
| insertText(tag, text) | Use in a custom keyboard, insert text to `TextInput`. |
| backSpace(tag) | Use in a custom keyboard, delete selected text or the charactor before cursor. |
| doDelete(tag) | Use in a custom keyboard, delete selected text or the charactor after cursor. |
| moveLeft(tag) | Use in a custom keyboard, move cursor to selection start or move cursor left. |
| moveRight(tag) | Use in a custom keyboard, move cursor to selection end or move cursor right. |
| hideKeyboard(tag) | Hide a custom keyboard. |
| switchSystemKeyboard(tag) | Use in a custom keyboard. Switch to system keyboard. Next time user press or focus on the `TextInput`, custom keyboard will appear again. To keep using system keyboard, call `uninstall` instead. |
| CustomTextInput | Use instead of `TextInput`, this component support all properties of `TextInput`. |
| prop: customKeyboardType: string | Use a registered custom keyboard. |

