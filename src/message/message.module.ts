import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import { MessageRepository } from './message.repository';

@Module({
  controllers: [MessageController],
  // things that can be used as Dependencies for other classes
  providers: [MessageService, MessageRepository]
})
export class MessageModule {}
