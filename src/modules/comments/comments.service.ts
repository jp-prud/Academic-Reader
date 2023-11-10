import { Injectable } from '@nestjs/common';
import { CommentsRepository } from 'src/shared/database/repositories/comments.repositories';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

export type OrderByOptions = 'asc' | 'desc';

@Injectable()
export class CommentsService {
  constructor(private readonly commentRepository: CommentsRepository) {}

  listFromPost(postId: string, orderBy: OrderByOptions = 'desc') {
    return this.commentRepository.findMany({
      where: {
        postId,
      },
      include: {
        user: {
          select: {
            username: true,
            fullName: true,
            avatar: true,
          },
        },
      },
      orderBy: [
        {
          createdAt: orderBy,
        },
        {
          updatedAt: orderBy,
        },
      ],
    });
  }

  create(postId: string, userId: string, createCommentDto: CreateCommentDto) {
    return this.commentRepository.create({
      data: {
        userId,
        postId,
        ...createCommentDto,
      },
    });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  delete(postId: string, commentId: string, userId: string) {
    return this.commentRepository.delete({
      where: {
        id: commentId,
        postId,
        userId,
      },
    });
  }
}
