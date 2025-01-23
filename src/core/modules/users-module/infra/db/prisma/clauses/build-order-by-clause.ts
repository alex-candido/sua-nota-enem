export class BuildOrderByClause {
  sortableFields: string[] = ['name', 'created_at'];
  async execute(
    sort: string,
    sort_dir: string,
  ): Promise<{ [key: string]: any } | undefined> {
    return sort && this.sortableFields.includes(sort)
      ? { [sort]: sort_dir || 'asc' }
      : undefined;
  }
}
