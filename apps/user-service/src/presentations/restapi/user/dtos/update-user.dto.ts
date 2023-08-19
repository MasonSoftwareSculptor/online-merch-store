import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from '@restapi/user/dtos';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
