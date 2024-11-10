import AggregateRoot from '../entity/aggregate-root';
import Entity from '../entity/entity';
import ValueObject from '../value-objects/value-object';

export interface IRepository<
  E extends AggregateRoot,
  _EntityId extends ValueObject,
> {
  createOne(entity: E): Promise<E | void>;
  createMany(entities: E[]): Promise<void>;
}

export interface SearchableRepositoryInterface<
  E extends Entity,
  EntityId extends ValueObject,
> extends IRepository<E, EntityId> {}
