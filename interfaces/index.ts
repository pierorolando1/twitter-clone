// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export interface User {
  displayName: string,
  email: string,
  photoURL: string,
  uid: string
}

export interface Action {
  payload: any,
  type: string
}