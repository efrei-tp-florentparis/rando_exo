import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}

  async getData(): Promise<object> {
    const response = await this.httpService
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=48.8566&lon=2.3522&appid=e90286bf250d9510cbd6ab07101945b6`,
      )
      .toPromise();

    return response.data;
  }
}
