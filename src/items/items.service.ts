/* eslint-disable prettier/prettier */
// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class ItemsService {}


import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<Item> {
    const item = await this.itemModel.findById(id).exec();
    if (!item) throw new NotFoundException(`Item with ID ${id} not found`);
    return item;
  }

  async create(data: Partial<Item>): Promise<Item> {
    const newItem = new this.itemModel(data);
    return newItem.save();
  }

  async update(id: string, data: Partial<Item>): Promise<Item> {
    const updatedItem = await this.itemModel.findByIdAndUpdate(id, data, { new: true }).exec();
    if (!updatedItem) throw new NotFoundException(`Item with ID ${id} not found`);
    return updatedItem;
  }

  async delete(id: string): Promise<void> {
    const result = await this.itemModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException(`Item with ID ${id} not found`);
  }
}
