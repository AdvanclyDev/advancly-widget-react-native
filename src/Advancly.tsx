/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Modal, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { Dispatch, Fragment, SetStateAction, useEffect } from 'react';
import { AdvanclyProps, RESPONSE_STATUSES } from './types';
import { Alert } from 'react-native';

interface ComponentProps extends AdvanclyProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const BASE_URL =
  'https://advancly-borrower.test.vggdev.com/create-loan-account/';
// const BASE_URL = 'http://localhost:3000/create-loan-account';
// const BASE_URL = 'http://192.168.100.6:3000/create-loan-account';

const Advancly: React.ForwardRefRenderFunction<
  React.ReactNode,
  ComponentProps
> = ({
  aggregator_id,
  bank_account_number,
  bank_code,
  borrower_phone,
  bvn_number,
  aggregator_loan_ref,
  cac_number,
  city,
  company_name,
  customer_type,
  email,
  first_name,
  gender,
  last_name,
  photo_url,
  public_key,
  residence_address,
  state,
  product_id,
  product_code,
  tenure,
  customStyles,
  onSuccess,
  onError,
  onCancel,
  showModal,
  setShowModal,
  autoStart = false,
}) => {
  const msgToPost = {
    aggregator_id,
    bank_account_number,
    bank_code,
    borrower_phone,
    bvn_number,
    aggregator_loan_ref,
    cac_number,
    city,
    company_name,
    customer_type,
    email,
    first_name,
    gender,
    last_name,
    photo_url,
    public_key,
    residence_address,
    state,
    product_id,
    product_code,
    tenure,
    customStyles,
  };

  const widgetUrl = `${BASE_URL}?message=${JSON.stringify(msgToPost)}`;

  // const htmlContent = `
  //     <!DOCTYPE html>
  //     <html lang="en">
  //       <head>
  //         <meta charset="UTF-8">
  //         <meta http-equiv="X-UA-Compatible" content="ie=edge">
  //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //         <title>Advancly Widget</title>
  //       </head>
  //         <body onload="initalizeWidget()" style="background-color:#f0f0f0;height:100vh">
  //           <script type="text/javascript">
  //           window.onload = initalizeWidget;
  //           function initalizeWidget(){
  //               window.ReactNativeWebView.postMessage(${msgToPost}, ${widgetUrl})
  //             }
  //           </script>
  //         </body>
  //     </html>
  //     `;

  const messageReceived = (data: string) => {
    const webResponse: any = JSON.parse(data);
    switch (webResponse.status) {
      case RESPONSE_STATUSES.SUCCESS:
        if (onSuccess) {
          onSuccess({
            status: RESPONSE_STATUSES.SUCCESS,
            data: webResponse[RESPONSE_STATUSES.SUCCESS]?.data,
          });
        }
        break;

      case RESPONSE_STATUSES.ERROR:
        if (onError) {
          onError({
            status: RESPONSE_STATUSES.ERROR,
            data: webResponse[RESPONSE_STATUSES.ERROR]?.data,
          });
        }
        break;

      case RESPONSE_STATUSES.CANCEL:
        if (onCancel) {
          onCancel({
            status: RESPONSE_STATUSES.CANCEL,
            data: webResponse[RESPONSE_STATUSES.CANCEL]?.data,
          });
        }
        break;

      default:
        break;
    }
    setShowModal(false);
  };

  useEffect(() => {
    setShowModal(autoStart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStart]);

  return (
    <Fragment>
      {showModal ? (
        <Modal visible={showModal} animationType="slide" transparent={false}>
          <SafeAreaView style={{ flex: 1 }}>
            <WebView
              style={[{ flex: 1 }]}
              source={{ uri: widgetUrl }}
              // source={{html: htmlContent}}
              onMessage={(e) => {
                Alert.alert(e.nativeEvent.data);
                messageReceived(e.nativeEvent?.data);
              }}
              cacheMode={'LOAD_NO_CACHE'}
              cacheEnabled={false}
            />
          </SafeAreaView>
        </Modal>
      ) : null}
    </Fragment>
  );
};

export default Advancly;
