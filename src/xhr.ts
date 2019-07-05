import { AxiosRequestConfig } from './type'

export default function xhr(config: AxiosRequestConfig) {
  const { url, method = 'GET', params, data = null } = config

  let ajax = new XMLHttpRequest()
  ajax.open(method, url, true)
  ajax.send(data)
}
