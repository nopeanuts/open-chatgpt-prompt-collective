import type { Prisma, Template } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TemplateCreateArgs>({
  template: {
    one: { data: { category: 'String', input: 'String', output: 'String' } },
    two: { data: { category: 'String', input: 'String', output: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Template, 'template'>
