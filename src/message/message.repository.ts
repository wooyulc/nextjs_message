import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessageRepository {
    async findOne(id: string) {
        const contents = await readFile('message.json', 'utf8');
        const message = JSON.parse(contents);
        return message[id];
    }
    
    async findAll() {
        const contents = await readFile('message.json', 'utf8');
        const message = JSON.parse(contents);
        return message;
    }

    async create(message: string) {
        const contents = await readFile('message.json', 'utf8');
        const messages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content:message};

        await writeFile('message.json', JSON.stringify(messages));
    }
}