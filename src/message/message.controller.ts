import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './DTOs/create-message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
    constructor(public messageService: MessageService,
        public messageService2: MessageService,
        public messageService3: MessageService) {
            console.log(messageService === messageService2);
            console.log(messageService2 === messageService3)
        }

    @Get()
    listMessage() {
        return this.messageService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        return this.messageService.create(body.content);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        const message = await this.messageService.findOne(id);

        if(!message) {
            throw new NotFoundException('message not found');
        }
        return message;
    }
}
