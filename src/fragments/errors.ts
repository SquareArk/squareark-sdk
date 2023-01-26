import gql from "graphql-tag";

export const checkoutErrorFragment = gql`
  fragment CheckoutError on CheckoutError {
    code
    field
    message
  }
`;

export const checkoutErrorAsListFragment = gql`
  fragment checkoutErrorAsList on CheckoutErrorAsList {
    code
    field
    message
    availableQuantity
    availability {
      quantity
      variants
    }
    variants
    __typename
  }
`;


export const paymentErrorFragment = gql`
  fragment PaymentError on PaymentError {
    code
    field
    message
  }
`;

export const accountErrorFragment = gql`
  fragment AccountError on AccountError {
    code
    field
    message
  }
`;