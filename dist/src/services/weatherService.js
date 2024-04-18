import { faker } from "@faker-js/faker";
import { storeWeatherData } from "../helpers/helpers.js";
export const generateLondonWeatherData = () => {
    // Generate random weather data
    const generatedWeatherData = {
        city: "London",
        temperature: faker.number.int({ min: -15, max: 30 }),
        humidity: faker.number.int({ min: 79, max: 86 }),
        wind: faker.number.int({ min: 2, max: 78 }),
        rain: faker.number.int({ min: 65, max: 75 }),
    };
    storeWeatherData(generatedWeatherData).catch(console.error);
    // return weather data
    return generatedWeatherData;
};
export const generateDublinWeatherData = () => {
    // Generate random weather data
    const generatedWeatherData = {
        city: "Dublin",
        temperature: faker.number.int({ min: -15, max: 30 }),
        humidity: faker.number.int({ min: 79, max: 86 }),
        wind: faker.number.int({ min: 2, max: 78 }),
        rain: faker.number.int({ min: 65, max: 75 }),
    };
    storeWeatherData(generatedWeatherData).catch(console.error);
    return generatedWeatherData;
};
//# sourceMappingURL=weatherService.js.map