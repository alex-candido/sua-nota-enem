import { IPaginationOutput } from '../../../../../../core/@seedwork/application/interfaces/pagination-output.interface';
import { ListResult } from '../../../../../../core/@seedwork/domain/repository/list-result';

export class PaginationOutput {
  static toOutput<Item = any>(
    items: Item[],
    props: Omit<ListResult, 'items'>,
  ): IPaginationOutput<Item> {
    return {
      items,
      total: props.total,
      current_page: props.current_page,
      last_page: props.last_page,
      per_page: props.per_page,
    };
  }
}
