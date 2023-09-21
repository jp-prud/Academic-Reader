import { IsString, IsNotEmpty, IsBoolean, IsEnum } from 'class-validator';
import { PostType } from '../entities/Post';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  subtitle: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  published: boolean;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  @IsEnum(PostType)
  type: PostType;
}
