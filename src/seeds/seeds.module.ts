import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SeedsService } from './seeds.service';
import { SeedsController } from './seeds.controller';
import { PokemonModule } from '../pokemon/pokemon.module';

@Module({
  imports: [HttpModule, PokemonModule],
  controllers: [SeedsController],
  providers: [SeedsService],
})
export class SeedsModule {}
