import { getApiUrl } from "util"

export default (imagePath: string) => {
    return imagePath.replace(`${getApiUrl()}/`, '')
}