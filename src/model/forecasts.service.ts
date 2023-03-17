/**
 * Data Model Interfaces
 */
import { BaseForecast, Forecast } from "./forecast.interface";
import { Forecasts } from "./forecasts.interface";

/**
 * Retrieve forecast from API, but for now dummy data
 */
let forecasts: Forecasts = {
    1: {
        id: 1,
        day: "Monday",
        dayMaxTemperature: 89,
        dayMinTemperature: 40
    }
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Forecast[]> => Object.values(forecasts);