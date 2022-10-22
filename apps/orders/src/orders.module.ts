import { DatabaseModule, RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import * as Joi from "joi"
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schemas/order.schema';
import { OrdersRepository } from './orders.repository';
import { BILLING_SERVICE } from './constant/services';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal : true,
      validationSchema : Joi.object({
        MONGODB_URI: Joi.string().required()
      }),
      envFilePath: './apps/orders/.env'
    }),
    DatabaseModule,
    MongooseModule.forFeature([{name : Order.name , schema : OrderSchema}]),
    RmqModule.register({
      name : BILLING_SERVICE
    })
    
  ],
  controllers: [OrdersController],
  providers: [OrdersService , OrdersRepository],
})
export class OrdersModule {}
