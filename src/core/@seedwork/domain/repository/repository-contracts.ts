import AggregateRoot from '../entity/aggregate-root';
import Entity from '../entity/entity';
import ValueObject from '../value-objects/value-object';

import { FilterParams } from './filter-params';
import { ListFiltersParams } from './list-filters-params';
import { ListResult } from './list-result';
import { PaginationParams } from './pagination-params';
import { SearchParams } from './search-params';

/* repository: findAll, findOne, createMany, createOne,
updateMany, updateOne, removeMany, removeOne, search, filter */

export interface IRepository<
  E extends AggregateRoot,
  EntityId extends ValueObject,
  Pagination,
  Search,
  Filters,
  ListOutput,
> {
  findAll(props: Pagination): Promise<ListOutput>;
  findOne(id: string | EntityId): Promise<E | null>;
  createMany(entities: E[]): Promise<void>;
  createOne(entity: E): Promise<E | void>;
  updateMany(ids: EntityId[], entities: E[]): Promise<void>;
  updateOne(id: string | EntityId, entity: E): Promise<E | void>;
  removeMany(ids: EntityId[]): Promise<void>;
  removeOne(id: string | EntityId): Promise<void>;
  search(props: Search): Promise<ListOutput>;
  filter(props: Filters): Promise<ListOutput>;
}

export interface SearchableRepositoryInterface<
  E extends Entity,
  EntityId extends ValueObject,
  Key = string,
  Pagination = PaginationParams,
  Filter = FilterParams<Key>,
  Search = SearchParams<Filter>,
  Filters = ListFiltersParams<Array<Filter>>,
  ListOutput = ListResult,
> extends IRepository<E, EntityId, Pagination, Search, Filters, ListOutput> {}
