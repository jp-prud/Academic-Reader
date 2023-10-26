import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { PostsRepository } from 'src/shared/database/repositories/posts.repositories';
import { ValidatePostOwnershipService } from './validate-post-ownership.service';

@Injectable()
export class PostsService {
  constructor(
    private readonly postRepository: PostsRepository,
    private readonly validatePostOwnershipService: ValidatePostOwnershipService,
  ) {}

  findAll() {
    return this.postRepository.findAll({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: {
          select: {
            name: true,
            avatar: true,
          },
        },
      },
    });
  }

  findOne(postId: string) {
    return this.postRepository.findUnique({
      where: {
        id: postId,
      },
      include: {
        user: {
          select: {
            name: true,
            avatar: true,
          },
        },
        _count: {
          select: {
            comments: {
              where: {
                postId,
              },
            },
          },
        },
      },
    });
  }

  resumeOne(postId: string) {
    return this.postRepository.findUnique({
      where: {
        id: postId,
      },
      select: {
        id: true,
        title: true,
        createdAt: true,
        likes: true,
        user: {
          select: {
            name: true,
            avatar: true,
          },
        },
      },
    });
  }

  resumeAll() {
    return this.postRepository.findAll({
      select: {
        id: true,
        title: true,
        thumbnail: true,
        description: true,
        createdAt: true,
        type: true,
        category: {
          select: {
            name: true,
          },
        },
        user: {
          select: {
            name: true,
            avatar: true,
          },
        },
      },
    });
  }

  create(userId: string, createPostDto: CreatePostDto) {
    const {
      title,
      description,
      content,
      thumbnail,
      published,
      type,
      subtitle,
    } = createPostDto;

    return this.postRepository.create({
      data: {
        title,
        description,
        content,
        published,
        thumbnail,
        type,
        userId,
        subtitle,
      },
    });
  }

  async publish(userId: string, id: string) {
    await this.validatePostOwnershipService.valite(userId, id);

    return this.postRepository.publish({
      where: {
        id,
      },
      data: {
        published: true,
      },
    });
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  delete(postId: string) {
    return this.postRepository.delete({
      where: {
        id: postId,
      },
    });
  }
}
