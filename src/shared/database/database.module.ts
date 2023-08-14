import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repositories';
import { PostsRepository } from './repositories/posts.repositories';
@Global()
@Module({
  providers: [PrismaService, UsersRepository, PostsRepository],
  exports: [UsersRepository, PostsRepository],
})
export class DatabaseModule {}
