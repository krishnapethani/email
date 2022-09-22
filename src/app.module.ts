import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailController } from './email.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport:{
        host:'smtp-relay.sendinblue.com',
        auth:{
          user:'apikey',
          pass:'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'
        }
      }
    })
  ],
  controllers: [AppController, EmailController],
  providers: [AppService],
})
export class AppModule {}
