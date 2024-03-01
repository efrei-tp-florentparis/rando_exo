import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';
import { PredefinedHikingModule } from './predefinedHiking/predefined-hiking.module';
import { CustomizableHikingModule } from './customizableHiking/customizable-hiking.module';
import { CustomizableHiking } from './customizableHiking/model/customizable-hiking';
import { MainMiddleware } from './middleware';

const options: CustomizableHiking = {
  name: '',
  difficulty: '',
  duration: null,
};

@Module({
  imports: [
    WeatherModule,
    PredefinedHikingModule,
    CustomizableHikingModule.register(options),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MainMiddleware).forRoutes(AppController);
  }
}

/* export class AppModule {} */
