export default (imagePath: string) => {
    return imagePath.replace(`http://${process.env.SERVER_HOST_NAME}:${process.env.SERVER_PORT}/`, '')
}