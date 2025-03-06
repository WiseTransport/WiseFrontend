export const searchLocation = async (query: string) => {
  if (!query) return

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`,
  )

  const data = await response.json()

  if (data.length > 0) {
    return {
      latitude: parseFloat(data[0].lat),
      longitude: parseFloat(data[0].lon),
    }
  }

  return null
}
