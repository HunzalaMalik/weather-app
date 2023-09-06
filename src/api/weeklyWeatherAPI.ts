import API from "./axios"

export const getWeeklyWeather = async (lat: number, long: number) => {
  try {
    const weeklyWeather = await API.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${
        import.meta.env.VITE_OW_API_KEY
      }`,
    )

    return weeklyWeather.data
  } catch (e) {
    console.log("Can't Fetch 5 days weather", e)
    return []
  }
}

export const getWeeklyWeatherByName = async (name: string) => {
  try {
    const weeklyWeather = await API.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${name}&&appid=${
        import.meta.env.VITE_OW_API_KEY
      }`,
    )

    return weeklyWeather.data
  } catch (e) {
    console.log("Can't Fetch 5 days weather", e)
    return []
  }
}
