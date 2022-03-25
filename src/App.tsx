/* eslint-disable react-native/no-inline-styles */
import React, { Fragment, useState } from 'react';
import { Alert, Text, TouchableOpacity } from 'react-native';
import Advancly from './Advancly';
import type { IResponse } from './types/index';

export default function App() {
  const onSuccess = (response: IResponse) => {
    Alert.alert('Success', JSON.stringify(response));
  };
  const onError = (response: IResponse) => {
    Alert.alert('Error', JSON.stringify(response));
  };
  const onCancel = (response: IResponse) => {
    Alert.alert('Cancel', JSON.stringify(response));
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
        style={{ marginTop: 100 }}
      >
        <Text>Show Widget </Text>
      </TouchableOpacity>

      <Advancly
        aggregator_id={29}
        bank_account_number="3055662696"
        bank_code="011"
        borrower_phone="08141200649"
        bvn_number="22247846872"
        aggregator_loan_ref={Date.now().toString()}
        cac_number="2366664"
        city="Mubuntu"
        company_name="HAIRTOPIA EX PARTE"
        customer_type="1"
        email="gbengacodes@gmail.com"
        first_name="Gbenga"
        gender="male"
        last_name="Olufeyimi"
        photo_url=""
        public_key="AYAyAToX8gZQKJwX"
        residence_address="80 Bola Street Ebute Metta"
        state="Lagos"
        product_id={53}
        product_code="C044"
        tenure={30}
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
        showModal={showModal}
        setShowModal={setShowModal}
        startTransaction={startTransaction}
        endTransaction={endTransaction}
        autoStart={false}
      />
    </Fragment>
  );
}
