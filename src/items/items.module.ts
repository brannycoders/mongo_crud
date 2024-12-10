/* eslint-disable prettier/prettier */
// import { Module } from '@nestjs/common';
// import { ItemsController } from './items.controller';
// import { ItemsService } from './items.service';

// @Module({
//   controllers: [ItemsController],
//   providers: [ItemsService]
// })
// export class ItemsModule {}


import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';
import { Item, ItemSchema } from './schemas/item.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
