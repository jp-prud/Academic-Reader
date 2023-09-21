import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class PostsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findFirst(findFirstDTO: Prisma.PostFindFirstArgs) {
    return this.prismaService.post.findFirst(findFirstDTO);
  }

  findUnique(findUniqueDTO: Prisma.PostFindUniqueArgs) {
    return this.prismaService.post.findUnique(findUniqueDTO);
  }

  findAll(findManyDTO?: Prisma.PostFindManyArgs) {
    return this.prismaService.post.findMany(findManyDTO);
  }

  create(createDTO: Prisma.PostCreateArgs) {
    return this.prismaService.post.create(createDTO);
  }

  publish(publishDTO: Prisma.PostUpdateArgs) {
    return this.prismaService.post.update(publishDTO);
  }

  delete(removeDTO: Prisma.PostDeleteArgs) {
    return this.prismaService.post.delete(removeDTO);
  }
}
