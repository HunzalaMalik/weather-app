import API from "./axios"

export const getCurrentWeather = async (lat: number, long: number) => {
  try {
    const currentWeather = await API.get(
      `https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${
        import.meta.env.VITE_OW_API_KEY
      }`,
    )

    return currentWeather.data
  } catch (e) {
    console.log("Current Weather not found", e)
    return []
  }
}

export const getCurrentWeatherByName = async (name: string) => {
  try {
    const currentWeather = await API.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${
        import.meta.env.VITE_OW_API_KEY
      }`,
    )

    return currentWeather.data
  } catch (e) {
    console.log("Current Weather not found", e)
    return []
  }
}
