import { MailerService } from '@nestjs-modules/mailer';
import { Controller, Get, Query } from '@nestjs/common';
import { get } from 'node:http';

@Controller('email')
export class EmailController {
    constructor(private mailservice:MailerService){}
 

    @Get('plain-text-email')
    async plainTextEmail(@Query('toemail')toemail){
        await this.mailservice.sendMail({
            to:toemail,
            from:'kisupatel2001123@gmail.com',
            subject:'simple plain text',
            text:'welcome to nestjs email'

        })
        return 'success' ;

    }

}
