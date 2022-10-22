import { Controller, Get } from '@nestjs/common';
import { EventPattern , Payload , RmqContext , Ctx} from '@nestjs/microservices';
import { BillingService } from './billing.service';

@Controller()
export class BillingController {
  constructor(private readonly billingService: BillingService) {}
  @EventPattern('order_created')
  async handleOrderCreated(@Payload() data : any , @Ctx() context :  RmqContext){
    this.billingService.bill(data)
  }
}
