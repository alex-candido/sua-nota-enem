import { UserFilterParams } from '../../../../domain/repository/user.repository';

export interface IWhereFilterClause {
  [_key: string]: {
    [_operator: string]: string | string[];
  };
}

export interface IWhereFilterRelationClause {
  [relation: string]: {
    some: {
      [_key: string]: {
        [_operator: string]: string | string[];
      };
    };
  };
}

export interface IWhereClause {
  where?: {
    AND: Array<IWhereFilterRelationClause | IWhereFilterClause>;
  };
}

export class BuildWhereClause {
  relations_include = ['accounts', 'sessions'];

  async execute(
    filters: UserFilterParams[] | UserFilterParams,
  ): Promise<IWhereClause> {
    const whereClause: IWhereClause = {
      where: {
        AND: [],
      },
    };
    if (!filters || (Array.isArray(filters) && filters.length === 0)) {
      return whereClause;
    }

    const isArray = Array.isArray(filters);
    if (isArray && filters.length) {
      filters.forEach(filter => {
        this.processFilter(filter, whereClause);
      });
    } else if (!isArray && filters) {
      this.processFilter(filters, whereClause);
    }
    return whereClause;
  }

  private processFilter(filter: UserFilterParams, whereClause: IWhereClause) {
    if (
      filter.relation &&
      filter.values &&
      this.relations_include.includes(String(filter.relation))
    ) {
      if (filter.relation && filter.values?.length) {
        if (filter.values?.length === 1) {
          whereClause.where?.AND.push({
            [`${filter.relation}`]: {
              some: {
                [`${filter.key}`]: {
                  [filter.operator ? `${filter.operator}` : 'contains']:
                    `${filter.values[0]}`,
                  ...(filter.mode ? { mode: filter.mode } : {}),
                },
              },
            },
          });
        } else {
          whereClause.where?.AND.push({
            [`${filter.relation}`]: {
              some: {
                [`${filter.key}`]: {
                  ['in']: filter.values,
                },
              },
            },
          });
        }
      }
    } else {
      if (filter.key && filter.values?.length) {
        if (filter.values?.length === 1) {
          whereClause.where?.AND.push({
            [`${filter.key}`]: {
              [filter.operator ? `${filter.operator}` : 'contains']:
                `${filter.values[0]}`,
              ...(filter.mode ? { mode: filter.mode } : {}),
            },
          });
        } else {
          whereClause.where?.AND.push({
            [`${filter.key}`]: {
              ['in']: filter.values,
            },
          } as IWhereFilterClause);
        }
      }
    }
  }
}
