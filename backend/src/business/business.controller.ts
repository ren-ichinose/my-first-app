import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import UserAuthGuard from 'src/auth/guards/user.guard';
import { Business, User } from '@prisma/client';
import { Msg } from 'src/interfaces/main.interfaces';
import RegisterBusinessDto from './dto/register-bussiness.dto';
import { BusinessService } from './business.service';

@UseGuards(UserAuthGuard)
@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Post()
  async register(
    @Body() dto: RegisterBusinessDto,
    @Req() { user }: { user: Omit<User, 'password'> },
  ): Promise<Msg> {
    const message = await this.businessService.register(dto, user.id);
    return message;
  }

  @Get()
  async getAll(
    @Req() { user }: { user: Omit<User, 'password'> },
  ): Promise<Business[]> {
    const businesses = await this.businessService.getAll(user.id);
    return businesses;
  }

  @Get(':businessId')
  async getById(
    @Param('businessId') businessId: string,
    @Req() { user }: { user: Omit<User, 'password'> },
  ): Promise<Business> {
    const business = await this.businessService.getById(businessId, user.id);
    return business;
  }
}
