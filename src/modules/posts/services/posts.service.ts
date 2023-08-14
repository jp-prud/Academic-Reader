import { Injectable, NotFoundException } from '@nestjs/common';
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

  create(userId: string, createPostDto: CreatePostDto) {
    const { title, description, content, published, type } = createPostDto;

    return this.postRepository.create({
      data: {
        title,
        description,
        content,
        published,
        type,
        userId,
      },
    });
  }

  findAll() {
    return this.postRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
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

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {}
}
