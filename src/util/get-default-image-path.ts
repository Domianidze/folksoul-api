export default (model: 'member' | 'social-media') => {
    return `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/public/img/default-${model}.png`
}