import { Module } from '@nestjs/common';

import { UserModule } from 'modules/user/user.module';
import { CommonModule } from 'common/common.module';
import { LocationModule } from 'modules/locations/location.module';

@Module({
  imports: [CommonModule, UserModule, LocationModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}
