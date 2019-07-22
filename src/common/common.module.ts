import { Module } from '@nestjs/common';
import { ConfigProvider } from './config/config.provider';
import { DatabaseProvider } from './database/database.provider';

@Module({
  providers: [DatabaseProvider, ConfigProvider],
  exports: [DatabaseProvider, ConfigProvider]
})
export class CommonModule {}
