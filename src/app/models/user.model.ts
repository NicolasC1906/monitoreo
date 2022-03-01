export type Roles = 1 | 2 | 3;


export  interface User {

  username: string;
  password: string;

}


export  interface UserResponse {

  message: string;
  token: string;
  userId: number;
  rol: Roles;


}
