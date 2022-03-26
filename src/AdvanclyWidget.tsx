/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Modal, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { Fragment, useEffect } from 'react';
import { AdvanclyProps, RESPONSE_STATUSES } from './types';

const BASE_URL =
  'https://advancly-borrower.test.vggdev.com/create-loan-account/';

const AdvanclyWidget: React.ForwardRefRenderFunction<
  React.ReactNode,
  AdvanclyProps
> = ({
  aggregator_id,
  bank_account_number,
  bank_code,
  borrower_phone,
  bvn_number,
  aggregator_loan_ref = `${Date.now().toString()}`,
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
  onCancel,
  showWidget,
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
    setShow(false);
  };

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(autoStart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStart]);
  useEffect(() => {
    setShow(showWidget);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showWidget]);

  return (
    <Fragment>
      {show ? (
        <Modal visible={show} animationType="slide" transparent={false}>
          <SafeAreaView style={{ flex: 1 }}>
            <WebView
              style={{ flex: 1 }}
              source={{ uri: widgetUrl }}
              onMessage={(e) => {
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

export default AdvanclyWidget;
