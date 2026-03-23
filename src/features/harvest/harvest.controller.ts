import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
  ParseIntPipe,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { Roles } from '../../common/decorators/roles.decorator';
import { multerOptions } from '../../common/config/multer.config';
import { HarvestService } from './harvest.service';
import { CreateHarvestDto } from './dtos/create-harvest.dto';
import { UpdateHarvestDto } from './dtos/update-harvest.dto';
import type { user } from '../../generated/prisma/index';

@Controller('harvests')
export class HarvestController {
  constructor(private readonly harvestService: HarvestService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('farmer')
  create(@CurrentUser() user: user, @Body() dto: CreateHarvestDto) {
    return this.harvestService.create(user.id, dto);
  }

  @Get('mine')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('farmer')
  getMyHarvests(@CurrentUser() user: user) {
    return this.harvestService.getMyHarvests(user.id);
  }

  @Get('categories')
  getCategories() {
    return this.harvestService.getCategories();
  }

  @Post('categories')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  createCategory(@Body('category') category: string) {
    return this.harvestService.createCategory(category);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  getById(@Param('id', ParseIntPipe) id: number) {
    return this.harvestService.getById(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('farmer')
  update(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser() user: user,
    @Body() dto: UpdateHarvestDto,
  ) {
    return this.harvestService.update(id, user.id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('farmer')
  delete(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: user) {
    return this.harvestService.delete(id, user.id);
  }

  @Post(':id/images')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('farmer')
  @UseInterceptors(FilesInterceptor('images', 5, multerOptions))
  addImages(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser() user: user,
    @UploadedFiles() files: Express.Multer.File[],
  ) {
    return this.harvestService.addImages(id, user.id, files);
  }

  @Delete(':id/images/:imageId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('farmer')
  removeImage(
    @Param('id', ParseIntPipe) id: number,
    @Param('imageId', ParseIntPipe) imageId: number,
    @CurrentUser() user: user,
  ) {
    return this.harvestService.removeImage(id, imageId, user.id);
  }
}
