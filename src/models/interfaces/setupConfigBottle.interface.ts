import type { IBtnRouter } from './btnRouter.interface'

export interface ISetupConfig {
  id: number
  step: string
  text: string
  title: string
  subTitle: string
  btnRouter: IBtnRouter
}

export interface ISetupConfigBottle {
  [key: string]: ISetupConfig
}
