export enum RESPONSE_STATUSES {
  SUCCESS = 'success',
  ERROR = 'error',
  CANCEL = 'cancel',
}

export interface IResponse {
  status: RESPONSE_STATUSES;
  data: {
    message?: string;
    loan_amount?: string;
    loan_application_referenceno?: string;
    loan_interest?: string;
    loan_product?: string;
    loan_tenure?: string;
  };
}

export interface AdvanclyProps {
  aggregator_id: number;
  bank_account_number: string | number;
  bank_code: string | number;
  borrower_phone: string;
  bvn_number: string;
  aggregator_loan_ref: string;
  cac_number: string;
  city: string;
  company_name: string;
  customer_type: '1' | '2';
  email: string;
  first_name: string;
  gender: string;
  last_name: string;
  photo_url?: string;
  public_key: string;
  residence_address: string;
  state: string;
  product_id: number;
  product_code: string;
  tenure: number;
  customStyles?: {
    buttonBackgroundColor?: string; // Can be string or the color code
    buttonTextColor?: string; // Can be string or the color code
    acceptButtonBackgroundColor?: string; // Can be string or the color code
    acceptButtonTextColor?: string; // Can be string or the color code
    declineButtonBackgroundColor?: string; // Can be string or the color code
    declineButtonTextColor?: string; // Can be string or the color code
    dropdownTextColor?: string; // Can be string or the color code
    dropdownBackgroundColor?: string; // Can be string or the color code
  };
  onCancel: (response: IResponse) => void;
  onError: (response: IResponse) => void;
  onSuccess: (response: IResponse) => void;
  startTransaction?: (response: IResponse) => void;
  endTransaction: (response: IResponse) => void;
  autoStart?: boolean;
}
