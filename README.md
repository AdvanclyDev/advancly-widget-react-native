# Advancly-Widget-React-Native

This package enables you to give loans to your borrowers. Install, and have fun with it.)

### [](https://github.com/AdvanclyDev/advancly-widget-react-native#installation)Installation

Add Advancly-Widget-React-Native to your project by running;

`npm install advancly-widget-react-native`

or

`yarn add advancly-widget-react-native`

### **One more thing**

This package has a dependency. The name of the dependency is **react-native-webview**

To add this dependency, run

`yarn add react-native-webview`

for iOS: `cd iOS && pod install && cd ..`

for expo applications run;

`expo install react-native-webview`

and that's it, you're all good to go!

<img width="306" alt="Screenshot of library in action" src="">

### [](https://github.com/AdvanclyDev/advancly-widget-react-native#usage)Usage 1

```javascript
import { Fragment, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { AdvanclyWidget, advanclyProps } from "advancly-widget-react-native";

export default function App() {
  const onSuccess = (response: advanclyProps.IResponse) => {
    console.log("Success", JSON.stringify(response));
  };
  const onError = (response: advanclyProps.IResponse) => {
    console.log("Error", JSON.stringify(response));
  };
  const onCancel = (response: advanclyProps.IResponse) => {
    console.log("Cancel", JSON.stringify(response));
  };
  const startTransaction = () => {
    setShowModal(true);
  };
  const endTransaction = () => {
    setShowModal(false);
  };

  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <TouchableOpacity
        onPress={() => {
          setShowModal(true);
        }}
        style={{ margin: 100, backgroundColor: "#377dff" }}
      >
        <Text style={{ color: "#fff" }}>Show Widget</Text>
      </TouchableOpacity>

      <AdvanclyWidget
        aggregator_id={1}
        bank_account_number="0000000000"
        bank_code="000"
        borrower_phone="08000000000"
        bvn_number="22222222222"
        aggregator_loan_ref={Date.now().toString()}
        cac_number="22332222"
        city="Lagos"
        company_name="Advancly Technologies Limited"
        customer_type="1"
        email="helloworld@test.com"
        first_name="Test"
        gender="male"
        last_name="User"
        photo_url=""
        public_key="enter-your-key-here"
        residence_address="123, Amen Road"
        state="Lagos"
        product_id={00}
        product_code="ABC"
        tenure={00}
        customStyles={{
          buttonBackgroundColor: "#377dff",
          buttonTextColor: "#fff",
          acceptButtonBackgroundColor: "#377dff",
          acceptButtonTextColor: "#fff",
          declineButtonBackgroundColor: "#377dff",
          declineButtonTextColor: "#fff",
          dropdownTextColor: "#000",
          dropdownBackgroundColor: "#fff",
        }}
        onSuccess={onSuccess}
        onError={onError}
        onCancel={onCancel}
        showModal={showModal}
        setShowModal={setShowModal}
        startTransaction={startTransaction}
        endTransaction={endTransaction}
        autoStart={false}
      />
    </Fragment>
  );
}


## Props

| Name                                 |                                                                                           use/description                                                                                           |                                                      extra |
| :----------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ---------------------------------------------------------: |
| `paystackKey`                        |                                                                   Public or Private advancly key(Contact advancly.com for a key)                                                                   |                                                     `nill` |
| `amount`                             |                                                                                          Amount to be paid                                                                                          |                                                     `nill` |
| `activityIndicatorColor`             |                                                                                           color of loader                                                                                           |                                           default: `green` |
| `billingEmail(required by advancly)` |                                                                                            Billers email                                                                                            |                                            default: `nill` |
| `billingMobile`                      |                                                                                           Billers mobile                                                                                            |                                            default: `nill` |
| `billingName`                        |                                                                                            Billers Name                                                                                             |                                            default: `nill` |
| `channels`                           | Specify payment options available to users. Available channel options are: ["card", "bank", "ussd", "qr", "mobile_money"]. Here's an example of usage: `channels={JSON.stringify(["card","ussd"])}` |                                          default: `"card"` |
| `onCancel`                           |               callback function if user cancels or payment transaction could not be verified. In a case of not being verified, transactionRef number is also returned in the callback               |                                            default: `nill` |
| `onSuccess`                          |                                    callback function if transaction was successful and verified (it will also return the transactionRef number in the callback )                                    |                                            default: `nill` |
| `autoStart`                          |                                                                               Auto start payment once page is opened                                                                                |                                           default: `false` |
| `refNumber`                          |                                                                         Reference number, if you have already generated one                                                                         | default: `''+Math.floor((Math.random() * 1000000000) + 1)` |
| `handleWebViewMessage`               |                                                                          Will be called when a WebView receives a message                                                                           |                                            default: `true` |

## [](https://github.com/AdvanclyDev/advancly-widget-react-native#contributions)Contributions

Want to help make this package even more awesome? [Read how to contribute](https://github.com/AdvanclyDev/advancly-widget-react-native/blob/master/CONTRIBUTING.md) and feel free to send in your PR!

## [](https://github.com/AdvanclyDev/advancly-widget-react-native#licensing)Licensing

This project is licensed under MIT license.

### Don't forget to star, like and share :)

## Contributors ✨

Thanks goes to Gbenga Olufeyimi (GbengaCodes) for creating this package ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Gbengaol"><img src="https://avatars.githubusercontent.com/u/36560069?s=100&u=a36a663f0efc63c2fe72859889fb75621b1733b9&v=4" width="100px;" alt=""/><br /><sub><b>Gbenga Olufeyimi</b></sub></a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
```
