/* eslint-disable prettier/prettier */
// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { MongooseModule } from '@nestjs/mongoose';
// import { ItemsModule } from './items/items.module';

// @Module({
//   imports: [
//     MongooseModule.forRoot('mongodb://localhost/nest',
      
//       {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       }),
//       ItemsModule,
//     ],


//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://brendan:Brendan1@cluster0.rb7di.mongodb.net/nest-crud', {
     //useNewUrlParser: true,
     //useUnifiedTopology: true,
    }),
    ItemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
