import { IsArray, IsIn, IsOptional, IsString } from 'class-validator';
import ValueObject from '../value-objects/value-object';

export type ModeDirection = 'default' | 'insensitive';
export type OperatorsType =
  | 'contains'
  | 'equals'
  | 'startsWith'
  | 'endsWith'
  | 'lt'
  | 'lte'
  | 'gt'
  | 'gte';

const VALID_RELATIONS = ['equals', 'contains', 'in', 'notIn'];
const VALID_MODES = ['default', 'insensitive'];

const VALID_OPERATORS: OperatorsType[] = [
  'contains',
  'equals',
  'startsWith',
  'endsWith',
  'lt',
  'lte',
  'gt',
  'gte',
];

export type FilterParamsConstructorProps<Key = string> = {
  key?: Key | null;
  relation?: string | null;
  values?: string[] | null;
  mode?: ModeDirection | null;
  operator?: OperatorsType | null;
};

export class FilterParams<Key = string> extends ValueObject {
  @IsString()
  @IsOptional()
  protected _key: Key | null;

  @IsString()
  @IsIn(VALID_RELATIONS)
  protected _relation: string | null;

  @IsArray()
  @IsString({ each: true })
  protected _values: string[] | null;

  @IsString()
  @IsIn(VALID_MODES)
  protected _mode: ModeDirection | null;

  @IsString()
  @IsIn(VALID_OPERATORS)
  protected _operator: OperatorsType | null;

  constructor(props: FilterParamsConstructorProps<Key> = {}) {
    super(props);
    this.key = props.key!;
    this.relation = props.relation!;
    this.values = props.values!;
    this.mode = props.mode!;
    this.operator = props.operator!;
  }

  get operator(): string | null {
    return this._operator;
  }

  private set operator(value: OperatorsType | null) {
    this._operator =
      value === null ||
      value === undefined ||
      !Object.values({} as OperatorsType).includes(value)
        ? null
        : `${value}`;
  }

  get mode(): ModeDirection | null {
    return this._mode;
  }

  private set mode(value: ModeDirection) {
    this._mode =
      value === null ||
      value === undefined ||
      !Object.values({} as ModeDirection).includes(value)
        ? null
        : `${value}`;
  }

  get values(): string[] | null {
    return this._values;
  }

  private set values(value: string[] | null) {
    this._values =
      value === null || value === undefined || !(value instanceof Array)
        ? null
        : value;
  }

  get relation(): string | null {
    return this._relation;
  }

  private set relation(value: string | null) {
    this._relation =
      value === null || value === undefined || (value as unknown) === ''
        ? null
        : (`${value}` as any);
  }

  get key(): Key | null {
    return this._key;
  }

  protected set key(value: Key | null) {
    this._key =
      value === null || value === undefined || (value as unknown) === ''
        ? null
        : (`${value}` as any);
  }
}
