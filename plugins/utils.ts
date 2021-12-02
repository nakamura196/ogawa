// /plugins/logger.ts
export class Utils {
  getIdFromUriOld(uri: string): string {
    return uri.split('fact_')[1]
  }

  getIdFromUri(uri: string, delimiter: string = '/'): string {
    const tmp = uri.split(delimiter)
    return tmp[tmp.length - 1]
  }

  sortNodes(sortedNodes: any[], edgeMap: any, fromNode: string) {
    if (!edgeMap[fromNode]) {
      return sortedNodes
    }

    if (!sortedNodes.includes(fromNode)) {
      sortedNodes.push(fromNode)
    }

    const toNodes = edgeMap[fromNode]

    // まず入れる
    for (const toNode of toNodes) {
      if (!sortedNodes.includes(toNode)) {
        sortedNodes.push(toNode)
      }
    }

    // 各出ていくノードの先を再帰的処理
    for (const toNode of toNodes) {
      sortedNodes = this.sortNodes(sortedNodes, edgeMap, toNode)
    }

    return sortedNodes
  }
}

export default (_: any, inject: any) => {
  inject('utils', new Utils())
}
