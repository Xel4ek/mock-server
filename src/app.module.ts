import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WifiController } from './wifi/wifi.controller';

@Module({
  imports: [],
  controllers: [AppController, WifiController],
  providers: [AppService],
})
export class AppModule {}
