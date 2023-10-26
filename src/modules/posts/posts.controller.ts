import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  BadRequestException,
} from '@nestjs/common';
import { PostsService } from './services/posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { IsPublic } from 'src/shared/decorators/IsPublic';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';
import { OrderByOptions } from '../comments/comments.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(
    @ActiveUserId() activeUserId: string,
    @Body() createPostDto: CreatePostDto,
  ) {
    return this.postsService.create(activeUserId, createPostDto);
  }

  @Get()
  @IsPublic()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':postId')
  @IsPublic()
  findOne(@Param('postId') postId: string) {
    return this.postsService.findOne(postId);
  }

  @Get('/resume/:postId')
  @IsPublic()
  resumeOne(@Param('postId') postId: string) {
    return this.postsService.resumeOne(postId);
  }

  @Get('/resume')
  @IsPublic()
  resumeAll() {
    console.log('resume');

    return this.postsService.resumeAll();
  }

  @Post(':postId/publish')
  publish(
    @ActiveUserId() userId: string,
    @Param(
      'postId',
      new ParseUUIDPipe({
        exceptionFactory: () => new BadRequestException('Invalid UUID format.'),
      }),
    )
    postId: string,
  ) {
    return this.postsService.publish(userId, postId);
  }

  @Patch(':postId')
  update(
    @Param('postId', ParseUUIDPipe) postId: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postsService.update(postId, updatePostDto);
  }

  @Delete(':postId')
  delete(@Param('postId') postId: string) {
    return this.postsService.delete(postId);
  }
}
