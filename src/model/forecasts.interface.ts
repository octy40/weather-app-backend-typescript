import { Forecast } from "./forecast.interface";

export interface Forecasts {
    [key: number]: Forecast;
}