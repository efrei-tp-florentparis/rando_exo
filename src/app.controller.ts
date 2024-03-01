import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { WeatherService } from './weather/weather.service';
import { PredefinedHinkingService } from './predefinedHiking/predefined-hiking.service';
import { CustomizableHiking } from './customizableHiking/model/customizable-hiking';
import { CustomizableHikingService } from './customizableHiking/customizable-hiking.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly weatherService: WeatherService,
    private predefinedHikingsService: PredefinedHinkingService,
    private customizableHinkingService: CustomizableHikingService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/predefinedHikings')
  getPredefinedHikings(): object[] {
    return this.predefinedHikingsService.getList();
  }

  @Get('customizableHiking/:name')
  getHiking(@Param('name') name: string): CustomizableHiking {
    return this.customizableHinkingService.getHiking(name);
  }
}
