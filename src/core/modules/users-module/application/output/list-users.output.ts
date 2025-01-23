import { IPaginationOutput } from '../../../../../core/@seedwork/application/interfaces/pagination-output.interface';
import { UserOutput } from './user.output';

export type ListUsersOutput = IPaginationOutput<UserOutput>;
