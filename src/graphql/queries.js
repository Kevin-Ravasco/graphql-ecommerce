import { gql } from "@apollo/client"

export const GET_PRODUCTS = gql`
  query {
    allProducts {
      edges {
        node {
          id
          name
          slug
          category {
            name
            slug
          }
          description
          priceCurrency
          price {
            amountStr
            amount
            currency {
              name
              symbol
            }
          }
          quantity
          dateAdded
          dateUpdated
          productMedia {
            image
          }
        }
      }
    }
  }
`
