import { Injectable } from '@nestjs/common';
import { CustomizableHiking } from './model/customizable-hiking';

@Injectable()
export class CustomizableHikingService {
  constructor(private options: CustomizableHiking) {}

  getHiking(name: string): CustomizableHiking {
    this.options.name = name;

    return this.options;
  }
}
