export type TUserGeoData = {
  lat: string,
  lng: string,
}

export type TUserAddressData = {
  city: string,
  street: string,
  suite: string,
  zipcode: string,
  geo: TUserGeoData,
}

export type TUserCompanyData = {
  bs: string,
  catchPhrase: string,
  name: string,
}

export type TUserData = {
  id: number,
  name: string,
  phone: string,
  username: string,
  website: string,
  email: string,
}
