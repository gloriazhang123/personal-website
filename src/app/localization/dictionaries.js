import 'server-only'

 
const dictionaries = {
  'en-US': () => import('./contents/en-US.json').then((module) => module.default),
  'zh-CN': () => import('./contents/zh-CN.json').then((module) => module.default),
  'ar-AE': () => import('./contents/ar-AE.json').then((module) => module.default),
}
 
export const getDictionary = async (locale) => dictionaries[locale]()