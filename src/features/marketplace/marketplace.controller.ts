import { Controller, Get, Param, Query, UseGuards, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { MarketplaceService } from './marketplace.service';
import { SearchQueryDto } from './dtos/search-query.dto';

@Controller('marketplace')
@UseGuards(JwtAuthGuard)
export class MarketplaceController {
  constructor(private readonly marketplaceService: MarketplaceService) {}

  @Get()
  search(@Query() query: SearchQueryDto) {
    return this.marketplaceService.search(query);
  }

  @Get('trending')
  getTrending() {
    return this.marketplaceService.getTrending();
  }

  @Get(':id')
  getListingDetail(@Param('id', ParseIntPipe) id: number) {
    return this.marketplaceService.getListingDetail(id);
  }
}
