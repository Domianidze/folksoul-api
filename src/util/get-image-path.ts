import { getApiUrl } from "./"

export default (imagePath: string) => {
    return imagePath.replace(`${getApiUrl()}/`, '')
}