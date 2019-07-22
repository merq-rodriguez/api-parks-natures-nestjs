import { Module } from '@nestjs/common';

import { CommonModule } from 'common/common.module';
import { LocationModule } from 'modules/locations/location.module';

@Module({
  imports: [CommonModule,  LocationModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
