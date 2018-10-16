
import { NativeModules } from 'react-native';

const { CustomKeyboardKit } = NativeModules;

import {
  NativeModules,
  TextInput,
  findNodeHandle,
  AppRegistry,
} from 'react-native';

const {
  install, uninstall,
  insertText, backSpace, doDelete,
  moveLeft, moveRight,
  switchSystemKeyboard,
} = CustomKeyboardKit;

export {
  install, uninstall,
  insertText, backSpace, doDelete,
  moveLeft, moveRight,
  switchSystemKeyboard,
};

const keyboardTypeRegistry = {};

export function register(type, factory) {
  keyboardTypeRegistry[type] = factory;
}

class CustomKeyboardKitContainer extends Component {
  render() {
    const {tag, type} = this.props;
    const factory = keyboardTypeRegistry[type];
    if (!factory) {
      console.warn(`Custom keyboard type ${type} not registered.`);
      return null;
    }
    const Comp = factory();
    return <Comp tag={tag} />;
  }
}

AppRegistry.registerComponent("CustomKeyboard", () => CustomKeyboardKitContainer);

export class CustomTextInput extends Component {
  static propTypes = {
    ...TextInput.propTypes,
    customKeyboardType: PropTypes.string,
  };

  componentDidMount() {
    install(findNodeHandle(this.input), this.props.customKeyboardType);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.customKeyboardType !== this.props.customKeyboardType) {
      install(findNodeHandle(this.input), newProps.customKeyboardType);
    }
  }

  onRef = ref => {
    this.input = ref;
  };
  
  render() {
    const { customKeyboardType, ...others } = this.props;
    return <TextInput {...others} ref={this.onRef}/>;
  }
}

// export default CustomKeyboardKit;
