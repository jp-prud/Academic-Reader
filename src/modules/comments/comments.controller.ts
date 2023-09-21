import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';
import { IsPublic } from 'src/shared/decorators/IsPublic';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get(':postId?')
  @IsPublic()
  listFromPost(@Param('postId') postId: string) {
    return this.commentsService.listFromPost(postId);
  }

  @Post(':postId')
  create(
    @Param('postId') postId: string,
    @ActiveUserId() userId: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.commentsService.create(postId, userId, createCommentDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':postId/:commentId')
  delete(
    @Param('@postId') postId: string,
    @Param('commentId') commentId: string,
    @ActiveUserId() userId: string,
  ) {
    return this.commentsService.delete(postId, commentId, userId);
  }
}
