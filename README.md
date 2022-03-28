# Advancly Widget React Native

This package enables you to give loans to your borrowers through Advancly widget. Install, and have fun with it.

## Installation

To add Advancly Widget to your React Native project, run;

`npm install advancly-widget-react-native`

or

`yarn add advancly-widget-react-native`

## One more thing

This package has a dependency. The name of the dependency is **react-native-webview**

To add this dependency, run

`yarn add react-native-webview`

for iOS: `cd iOS && pod install && cd ..`

for expo applications run;

`expo install react-native-webview`

and that's it, you're all good to go!

### Screenshots of the widget

<img width="306" alt="Screenshot of library while loading" src="https://user-images.githubusercontent.com/102379468/160243723-e40f5f2c-146d-450b-8b9e-2603ea7061bf.png">
<img width="306" alt="Screenshot of library for signup" src="https://user-images.githubusercontent.com/102379468/160243727-50ba9bbe-c222-4646-b9f7-4d46a42cddff.png">
<img width="306" alt="Screenshot of library for requesting loan" src="https://user-images.githubusercontent.com/102379468/160243726-cfc7466e-0410-4445-b850-74a32675e95c.png">

### [](https://github.com/AdvanclyDev/advancly-widget-react-native#usage)Usage

```javascript
import { Fragment, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { AdvanclyWidget, advanclyProps } from 'advancly-widget-react-native';

export default function App() {
  const onSuccess = (response: advanclyProps.IResponse) => {
    console.log('Success', JSON.stringify(response));
  };
  const onError = (response: advanclyProps.IResponse) => {
    console.log('Error', JSON.stringify(response));
  };
  const onCancel = (response: advanclyProps.IResponse) => {
    console.log('Cancel', JSON.stringify(response));
  };

  const [showWidget, setShowWidget] = useState(false);
  return (
    <Fragment>
      <TouchableOpacity
        onPress={() => {
          setShowWidget(true);
        }}
        style={{ margin: 100, backgroundColor: '#377dff' }}
      >
        <Text style={{ color: '#fff' }}>Show Widget</Text>
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
        public_key="enter-your-public-key-here"
        residence_address="123, Amen Road"
        state="Lagos"
        product_id={00}
        product_code="ABC"
        tenure={00}
        customStyles={{
          buttonBackgroundColor: '#377dff',
          buttonTextColor: '#fff',
          acceptButtonBackgroundColor: '#377dff',
          acceptButtonTextColor: '#fff',
          declineButtonBackgroundColor: '#377dff',
          declineButtonTextColor: '#fff',
          dropdownTextColor: '#000',
          dropdownBackgroundColor: '#fff',
        }}
        onSuccess={onSuccess}
        onError={onError}
        onCancel={onCancel}
        showWidget={showWidget}
        autoStart={false}
        environment={advanclyProps.ENVIRONMENT.TEST}
      />
    </Fragment>
  );
}
```

## Props

| Name                                 |                                                         Description                                                         |                Extra Information |
| :----------------------------------- | :-------------------------------------------------------------------------------------------------------------------------: | -------------------------------: |
| `public_key`                         |                                Public key (sign up on aggregator.advancly.com to get yours)                                 |                  default: `nill` |
| `aggregator_id`                      |               The ID of you the aggregator. You can get this on the settings page of your Advancly platform.                |                  default: `nill` |
| `email`                              |                                                  Borrower's email address                                                   |                  default: `nill` |
| `first_name`                         |                                                    Borrower's first name                                                    |                  default: `nill` |
| `last_name`                          |                                                    Borrower's last name                                                     |                  default: `nill` |
| `gender`                             |                                            Borrower's gender. `male` or `female`                                            |                  default: `nill` |
| `product_id`                         |    The ID of the loan product on Advancly platform. You can get this on the Loan Products page of your Advancly platform    |                  default: `nill` |
| `product_code`                       |   The code of the loan product on Advancly platform. You can get this on the Loan Products page of your Advancly platform   |                  default: `nill` |
| `tenure`                             |                                              Borrower's loan tenure (in days)                                               |                  default: `nill` |
| `bank_account_number`                |                                               Borrower's bank account number                                                |                  default: `nill` |
| `bank_code`                          |                                              Borrower's bank code on Advancly.                                              |                  default: `nill` |
| `borrower_phone`                     |                                                   Borrower's phone number                                                   |                  default: `nill` |
| `bvn_number`                         |                                                       Borrower's BVN                                                        |                  default: `nill` |
| `aggregator_loan_ref` (not required) |                                        Loan reference number on aggregator platform                                         | default: `Date.now().toString()` |
| `cac_number` (not required)          |                                   The borrower's CAC number. For corporate borrower only                                    |                  default: `nill` |
| `residence_address`                  |                                                   The borrower's address                                                    |                  default: `nill` |
| `city`                               |                                                     The borrower's city                                                     |                  default: `nill` |
| `state`                              |                                                    The borrower's state                                                     |                  default: `nill` |
| `autoStart`                          |                                           Auto start payment once page is opened                                            |                 default: `false` |
| `company_name` (not required)        |                          The name of the borrower's company. This is for corporate borrowers only.                          |                  default: `nill` |
| `customer_type`                      |               This can be either `1` or `2`. `1` is for individual borrowers. `2` is for corporate borrowers                |                  default: `nill` |
| `photo_url`                          |                                              The url of the borrower's image.                                               |                  default: `nill` |
| `onCancel`                           |                                     callback function when borrower cancels the widget                                      |                  default: `nill` |
| `onSuccess`                          |                                 callback function when borrower's transaction is successful                                 |                  default: `nill` |
| `showWidget`                         |                                      A boolean that controls when then widget is shown                                      |                 default: `false` |
| `environment`                        | An enum that tells the environment the widget should be shown in. This can be either `"test"`, `"staging"`, `"production"`. |                default: `"test"` |

## [](https://github.com/AdvanclyDev/advancly-widget-react-native#contributions)Contributions

Want to help make this package even more awesome? [Read how to contribute](https://github.com/AdvanclyDev/advancly-widget-react-native/blob/master/CONTRIBUTING.md) and feel free to send in your PR!

## [](https://github.com/AdvanclyDev/advancly-widget-react-native#licensing)Licensing

This project is licensed under MIT license.

### Don't forget to star, like and share :)

## Contributors ✨

Thanks goes to Gbenga Olufeyimi (@GbengaCodes) for creating this package ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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

```
