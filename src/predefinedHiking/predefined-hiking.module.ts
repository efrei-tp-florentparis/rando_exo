import { Module } from '@nestjs/common';
import { PredefinedHinkingService } from './predefined-hiking.service';

@Module({
  exports: [PredefinedHinkingService],
  providers: [PredefinedHinkingService],
})
export class PredefinedHikingModule {}
