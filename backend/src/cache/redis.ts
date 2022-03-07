import Redis from 'ioredis';
import config from '../config'; 
export default new Redis({
    host: config.redis.host,
    port: parseInt(config.redis.port!), 
    password: config.redis.password ?? null
});