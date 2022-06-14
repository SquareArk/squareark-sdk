import gql from "graphql-tag";
import { checkoutPriceFragment } from "./checkout";

export const productBasicTranslationFragment = gql`
  fragment ProductBasicTranslationFragment on ProductTranslation {
    id
    name
  }
`;

export const baseProductFragment = gql`
  ${productBasicTranslationFragment}
  fragment BaseProduct on Product {
    id
    name
    slug
    seoDescription
    seoTitle
    bestSeller
    thumbnail {
      url
      alt
    }
    thumbnail2x: thumbnail(size: 510) {
      url
    }
    translation(languageCode: $languageCode) {
      ...ProductBasicTranslationFragment
    }
  }
`;

export const selectedAttributeFragment = gql`
  fragment SelectedAttributeFields on SelectedAttribute {
    attribute {
      id
      name
      slug
    }
    values {
      id
      name
    }
  }
`;

export const productVariantFragment = gql`
  ${checkoutPriceFragment}
  fragment ProductVariantFields on ProductVariant {
    id
    sku
    name
    quantityAvailable(countryCode: $countryCode)
    isAvailable
    images {
      id
      url
      alt
    }
    pricing {
      onSale
      priceUndiscounted {
        ...Price
      }
      price {
        ...Price
      }
    }
    attributes {
      attribute {
        id
        name
        slug
      }
      values {
        id
        name
        value: name
      }
    }
  }
`;

export const productPricingFragment = gql`
  ${checkoutPriceFragment}
  fragment ProductPricingField on Product {
    pricing {
      onSale
      priceRangeUndiscounted {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
      priceRange {
        start {
          ...Price
        }
        stop {
          ...Price
        }
      }
    }
  }
`;

export const productFragment = gql`
  ${baseProductFragment}
  ${selectedAttributeFragment}
  ${productVariantFragment}
  ${productPricingFragment}
  fragment ProductDetails on Product {
    ...BaseProduct
    ...ProductPricingField
    descriptionJson
    category {
      id
      name
      products(first: 3) {
        edges {
          node {
            ...BaseProduct
            ...ProductPricingField
            category {
              id
              name
            }
          }
        }
      }
    }
    images {
      id
      url
    }
    attributes {
      ...SelectedAttributeFields
    }
    variants {
      ...ProductVariantFields
    }
    isAvailable
  }
`;
