import { Step } from '@/models/enum/step.enum'
import type { ISetupConfigBottle } from '@/models/interfaces/setupConfigBottle.interface'

export const setupConfig: ISetupConfigBottle = {
  phaseOne: {
    id: 1,
    step: Step.CAP,
    text: 'Go to the next step',
    title: 'Bottle Cap',
    subTitle: 'Decide the color of the cap',
    btnRouter: { name: 'config', params: { id: '2' } },
  },
  phaseTwo: {
    id: 2,
    step: Step.BODY,
    text: 'Go to the last step',
    title: 'Body of the Bottle',
    subTitle: 'Decide the color of the body',
    btnRouter: { name: 'config', params: { id: '3' } },
  },
  phaseThree: {
    id: 3,
    step: Step.BOTTOM,
    text: 'Confirm the bottle',
    title: 'Bottom of the Bottle',
    subTitle: 'Decide the color of the bottom',
    btnRouter: { name: 'greetings' },
  },
}
