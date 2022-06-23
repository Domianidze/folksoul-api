export default (imagePath: string) => {
    return imagePath.replace(`http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`, '')
}