import { DynamicModule, Module } from '@nestjs/common';
import { CustomizableHikingService } from './customizable-hiking.service';
import { CustomizableHiking } from './model/customizable-hiking';

@Module({})
export class CustomizableHikingModule {
  static register(options: CustomizableHiking): DynamicModule {
    return {
      module: CustomizableHikingModule,
      providers: [
        {
          provide: CustomizableHikingService,
          useFactory: () => new CustomizableHikingService(options),
        },
      ],
      exports: [CustomizableHikingService],
    };
  }
}
