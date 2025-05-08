export type AddressComponent = {
  long_name: string
  short_name: string
}

export type GeocodeGeometry = {
  location: {
    lat: number
    lng: number
  }
}

export type GeocodeResponse = {
  address_components: AddressComponent[]
  geometry: GeocodeGeometry
}
