export default (model: 'member' | 'social-media' | 'band') => {
    return `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/public/img/default-${model}.png`
}