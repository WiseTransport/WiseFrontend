import axios from "axios"
import { GeocodeResponse } from "./schemas"
import { GEOCODE_URL } from "./shared"

export const geocodeLocation = async (address: string): Promise<GeocodeResponse[]> => {
  return axios
    .get(GEOCODE_URL + "/geocode", {
      params: {
        // address: encodeURI(address),
        address: address,
      },
    })
    .then((response) => response.data)
}
