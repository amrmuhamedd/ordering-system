import { Inject, Injectable } from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices'
import { lastValueFrom } from 'rxjs';
import { BILLING_SERVICE } from './constant/services';
import { CreateOrderRequest } from './dto/create-order.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersREpository : OrdersRepository , @Inject(BILLING_SERVICE) private billingClient : ClientProxy){}
 async createOrder(request  : CreateOrderRequest) {
    const session = await this.ordersREpository.startTransaction();
    try{
      const order = await this.ordersREpository.create(request , {session})
      await lastValueFrom(
        this.billingClient.emit('order_created' , {
          request
        })
      ) 
      await  session.commitTransaction()
      return order
    }
    catch (err){
      await session.abortTransaction()
      throw err
    }
  }
  async getOrders() {
    return this.ordersREpository.find({});
  }
}
