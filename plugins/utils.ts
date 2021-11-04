// /plugins/logger.ts
export class Utils {
  getIdFromUriOld(uri: string): string {
    return uri.split('fact_')[1]
  }

  getIdFromUri(uri: string): string {
    const tmp = uri.split('/')
    return tmp[tmp.length - 1]
  }
}

export default (_: any, inject: any) => {
  inject('utils', new Utils())
}
