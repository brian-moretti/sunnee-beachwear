export function normalizaParamsRouter(params: string | string[] | undefined) {
  if (!params) return undefined
  return Array.isArray(params) ? params[0] : params
}
