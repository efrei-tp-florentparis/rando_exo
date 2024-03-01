import { Controller, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  getData(): object {
    return this.weatherService.getData();
  }

  @Get('/test')
  getActualWeather(): string {
    return 'Pas très beau';
  }
}
