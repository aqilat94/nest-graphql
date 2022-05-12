import { VideoService } from './video.service';
import { Module } from '@nestjs/common';
import { VideoResolvers } from './video.resolvers';

@Module({
    providers: [VideoService, VideoResolvers],
})
export class VideoModule { }
