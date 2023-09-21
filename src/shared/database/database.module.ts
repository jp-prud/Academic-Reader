import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repositories';
import { PostsRepository } from './repositories/posts.repositories';
import { CommentsRepository } from './repositories/comments.repositories';
@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    PostsRepository,
    CommentsRepository,
  ],
  exports: [UsersRepository, PostsRepository, CommentsRepository],
})
export class DatabaseModule {}
