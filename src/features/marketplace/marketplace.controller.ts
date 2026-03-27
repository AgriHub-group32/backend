import { Controller, Get, Param, Query, ParseIntPipe } from '@nestjs/common';
import { MarketplaceService } from './marketplace.service';
import { SearchQueryDto } from './dtos/search-query.dto';

@Controller('marketplace')
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
