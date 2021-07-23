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

export interface Tweet {
  authorId: string,
  content: string,
  likes: number,
  reetwets: number,
  comments: [Tweet?]
}