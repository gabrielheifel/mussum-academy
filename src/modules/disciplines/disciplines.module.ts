import { Module } from '@nestjs/common';
import { DisciplinesService } from './disciplines.service';
import { DisciplinesResolver } from './disciplines.resolver';

@Module({
  providers: [DisciplinesResolver, DisciplinesService]
})
export class DisciplinesModule {}
