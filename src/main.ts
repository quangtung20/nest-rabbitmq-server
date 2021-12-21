import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:'http://localhost:4200'
  })
  await app.listen(3001);
}
// const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
//   transport: Transport.RMQ,
//   options: {
//     urls: ['amqps://voawoena:GpFt0bfs_7AEpdjxWrF1-fpHXGz_-6JM@hawk.rmq.cloudamqp.com/voawoena'],
//     queue: 'main_queue',
//     queueOptions: {
//       durable: false
//     },
//   },
// });

// await app.listen()
// }
bootstrap();
