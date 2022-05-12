import { VideoModule } from './videos/video.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    VideoModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql']
    })
  ],
})
export class AppModule { }
