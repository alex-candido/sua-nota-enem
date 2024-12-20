import { PrismaService } from '../../../../../../../nestjs-app/@share/database/prisma/implementations/prisma.service';
import { IWhereClause } from './build-where.clause';

export class BuildTransactionClause {
  async execute(
    prisma: PrismaService,
    page: number,
    per_page: number,
    orderByClause: { [key: string]: any } | undefined,
    filters?: any,
    whereClause?: IWhereClause,
  ): Promise<any> {
    const skip = (page - 1) * per_page;
    const take = per_page;

    return await prisma.$transaction([
      prisma.user.findMany({
        ...(filters ? whereClause : null),
        ...(skip ? { skip: +skip } : null),
        ...(take ? { take: +take } : null),
        ...(orderByClause ? { orderBy: { ...orderByClause } } : null),
      }),
      prisma.user.count(),
    ]);
  }
}
