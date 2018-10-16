using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Custom.Keyboard.Kit.RNCustomKeyboardKit
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNCustomKeyboardKitModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNCustomKeyboardKitModule"/>.
        /// </summary>
        internal RNCustomKeyboardKitModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNCustomKeyboardKit";
            }
        }
    }
}
