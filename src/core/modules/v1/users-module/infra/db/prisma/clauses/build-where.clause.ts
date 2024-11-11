import { UserFilterParams } from '../../../../domain/repository/user.repository';

interface IWhereFilterClause {
  [_key: string]: {
    [_operator: string]: string | string[];
  };
}

interface IWhereFilterRelationClause {
  [relation: string]: {
    some: {
      [_key: string]: {
        [_operator: string]: string | string[];
      };
    };
  };
}

interface IWhereClause {
  where?: {
    AND: Array<IWhereFilterRelationClause | IWhereFilterClause>;
  };
}

export class BuildWhereClause {
  relations_include = ['accounts', 'sessions'];

  async execute(filters: UserFilterParams[]): Promise<IWhereClause> {
    const whereClause: IWhereClause = {
      where: {
        AND: [],
      },
    };

    if (filters?.length) {
      filters.forEach(filter => {
        if (
          filter.relation &&
          filter.values &&
          this.relations_include.includes(String(filter.relation))
        ) {
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
        } else {
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
      });
    }
    return whereClause;
  }
}
