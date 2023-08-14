import { Injectable, NotFoundException } from '@nestjs/common';
import { PostsRepository } from 'src/shared/database/repositories/posts.repositories';

@Injectable()
export class ValidatePostOwnershipService {
  constructor(private readonly postRepository: PostsRepository) {}

  async valite(userId: string, postId: string) {
    const isOwner = await this.postRepository.findFirst({
      where: {
        userId,
        id: postId,
      },
    });

    if (!isOwner) {
      throw new NotFoundException('Post not found');
    }
  }
}
