import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class CommentsRepository {
  constructor(private readonly prismaService: PrismaService) {}
  findMany(findManyDTO: Prisma.CommentFindManyArgs) {
    return this.prismaService.comment.findMany(findManyDTO);
  }

  create(createDTO: Prisma.CommentCreateArgs) {
    return this.prismaService.comment.create(createDTO);
  }

  publish(publishDTO: Prisma.CommentUpdateArgs) {
    return this.prismaService.comment.update(publishDTO);
  }

  delete(removeDTO: Prisma.CommentDeleteArgs) {
    return this.prismaService.comment.delete(removeDTO);
  }
}
