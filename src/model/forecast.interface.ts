export interface BaseForecast {
    day: string;
    dayMaxTemperature: number;
    dayMinTemperature: number;
}

export interface Forecast extends BaseForecast {
    id: number;
}