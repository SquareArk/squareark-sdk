/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CheckoutErrorCode } from "./../../gqlTypes/globalTypes";

// ====================================================
// GraphQL fragment: checkoutErrorAsList
// ====================================================

export interface checkoutErrorAsList {
  __typename: "CheckoutErrorAsList";
  /**
   * The error code.
   */
  code: CheckoutErrorCode;
  /**
   * Name of a field that caused the error. A value of `null` indicates that the
   * error isn't associated with a particular field.
   */
  field: string | null;
  /**
   * The error message.
   */
  message: string | null;
  /**
   * variant's available qty.
   */
  availableQuantity: string[] | null;
  /**
   * List of varint IDs which causes the error.
   */
  variants: string[] | null;
}
