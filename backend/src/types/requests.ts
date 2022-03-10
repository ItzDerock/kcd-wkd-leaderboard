import { FastifyRequest } from "fastify"

export type GetTeamDetails = FastifyRequest<{
    Params: {
        teamName: string
    }
}>