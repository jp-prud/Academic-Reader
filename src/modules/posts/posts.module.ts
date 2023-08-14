import { Module } from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { PostsController } from './posts.controller';
import { DatabaseModule } from 'src/shared/database/database.module';
import { ValidatePostOwnershipService } from './services/validate-post-ownership.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PostsController],
  providers: [PostsService, ValidatePostOwnershipService],
  exports: [ValidatePostOwnershipService],
})
export class PostsModule {}
