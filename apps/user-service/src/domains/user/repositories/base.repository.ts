import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class BaseRepository<Entity> {
  abstract create(entity: Entity): Promise<Entity>;
  abstract update(entity: Entity): Promise<Entity>;
}
