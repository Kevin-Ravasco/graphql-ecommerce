// import { gql } from "@apollo/client"

export const LOGIN_USER = `
  mutation {
    tokenAuth(email: "ravasco2@gmail.com", password: "hotsauce123") {
      success
      errors
      unarchiving
      token
      refreshToken
      unarchiving
      user {
        pk
        id
        email
        isActive
        verified
        secondaryEmail
      }
    }
  }
`
