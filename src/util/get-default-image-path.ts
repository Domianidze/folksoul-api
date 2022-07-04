import { getApiUrl } from "./"

export default (model: 'member' | 'social-media' | 'band') => {
    return `${getApiUrl()}/public/img/default-${model}.png`
}