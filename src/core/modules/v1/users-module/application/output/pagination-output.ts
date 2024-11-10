import { IPaginationOutput } from '../../../../../../core/@seedwork/application/interfaces/pagination-output.interface';
import { SearchResult } from '../../../../../../core/@seedwork/domain/repository/search-result';

export class PaginationOutput {
  static toOutput<Item = any>(
    items: Item[],
    props: Omit<SearchResult, 'items'>,
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
