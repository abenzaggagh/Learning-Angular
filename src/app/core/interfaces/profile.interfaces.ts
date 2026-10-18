export interface IProfile {
  firstName: string;
  lastName: string;
  birthday: string;
}

export interface IProfileDetails extends IProfile {
  email: string;
  phoneNumber: string;
  address: IAddress;
}

export interface IAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
}
