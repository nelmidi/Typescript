export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}
export type User = {
  username: string;
  role: ROLES;
}
const nicouser: User = {
  username: 'nicobytes',
  role: ROLES.ADMIN
}
console.log(nicouser);
