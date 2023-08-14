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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
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

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
