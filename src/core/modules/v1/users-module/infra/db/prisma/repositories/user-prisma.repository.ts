import { PrismaService } from '../../../../../../../../nestjs-app/@share/database/prisma/implementations/prisma.service';

export class UserPrismaRepository {
  constructor(private _prisma: PrismaService) {}
}
