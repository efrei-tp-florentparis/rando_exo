import { Injectable } from '@nestjs/common';

const predefinedHikingList = [
  {
    name: 'Pointes des aiguilles rouges',
    difficulty: 3,
    duration: '1.5j',
  },
  {
    name: 'Chemin de Saint-Guilhem-le-Désert, du Rozier à Meyrueis',
    difficulty: 4,
    duration: '2j',
  },
];

@Injectable()
export class PredefinedHinkingService {
  getList(): object[] {
    return predefinedHikingList;
  }
}
