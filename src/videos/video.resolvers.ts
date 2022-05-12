import { Args, Resolver, Query, Mutation } from "@nestjs/graphql";
import { Video } from "src/graphql";
import { VideoDTO } from "./dto/video.dto";
import { VideoService } from "./video.service";

@Resolver('Video')
export class VideoResolvers {
    constructor(private readonly videoService: VideoService) { }

    @Query()
    async videos() {
        return this.videoService.findAll()
    }

    @Mutation()
    async create(@Args('input') args: VideoDTO): Promise<Video> {
        return await this.videoService.create(args);
    }
}