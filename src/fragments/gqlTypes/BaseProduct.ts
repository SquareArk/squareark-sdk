/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BaseProduct
// ====================================================

export interface BaseProduct_thumbnail {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface BaseProduct_thumbnail2x {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
}

export interface BaseProduct_translation {
  __typename: "ProductTranslation";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface BaseProduct {
  __typename: "Product";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  seoDescription: string | null;
  seoTitle: string | null;
  /**
   * which product is top in sale.
   */
  bestSeller: boolean | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail: BaseProduct_thumbnail | null;
  /**
   * The main thumbnail for a product.
   */
  thumbnail2x: BaseProduct_thumbnail2x | null;
  /**
   * Returns translated product fields for the given language code.
   */
  translation: BaseProduct_translation | null;
}
