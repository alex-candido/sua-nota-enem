import { ValueObject } from '../value-objects/value-object';
import Entity from './entity';

export abstract class AggregateRoot<
  Props = any,
  EntityId extends ValueObject = any,
  JsonProps = Required<{ id: string } & Props>,
> extends Entity<EntityId, Props, JsonProps> {}

export default AggregateRoot;
