import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { type Prisma } from '@prisma/client';

@Injectable()
export class PostsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDTO: Prisma.PostCreateArgs) {
    return this.prismaService.post.create(createDTO);
  }

  publish(publishDTO: Prisma.PostUpdateArgs) {
    return this.prismaService.post.update(publishDTO);
  }

  findFirst(findFirstDTO: Prisma.PostFindFirstArgs) {
    return this.prismaService.post.findFirst(findFirstDTO);
  }

  findAll() {
    return this.prismaService.post.findMany();
  }

  findUnique(findUniqueDTO: Prisma.PostFindUniqueArgs) {
    return this.prismaService.post.findUnique(findUniqueDTO);
  }
}
