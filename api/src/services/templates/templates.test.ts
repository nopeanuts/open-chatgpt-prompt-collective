import type { Template } from '@prisma/client'

import {
  templates,
  template,
  createTemplate,
  updateTemplate,
  deleteTemplate,
} from './templates'
import type { StandardScenario } from './templates.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('templates', () => {
  scenario('returns all templates', async (scenario: StandardScenario) => {
    const result = await templates()

    expect(result.length).toEqual(Object.keys(scenario.template).length)
  })

  scenario('returns a single template', async (scenario: StandardScenario) => {
    const result = await template({ id: scenario.template.one.id })

    expect(result).toEqual(scenario.template.one)
  })

  scenario('creates a template', async () => {
    const result = await createTemplate({
      input: { category: 'String', input: 'String', output: 'String' },
    })

    expect(result.category).toEqual('String')
    expect(result.input).toEqual('String')
    expect(result.output).toEqual('String')
  })

  scenario('updates a template', async (scenario: StandardScenario) => {
    const original = (await template({
      id: scenario.template.one.id,
    })) as Template
    const result = await updateTemplate({
      id: original.id,
      input: { category: 'String2' },
    })

    expect(result.category).toEqual('String2')
  })

  scenario('deletes a template', async (scenario: StandardScenario) => {
    const original = (await deleteTemplate({
      id: scenario.template.one.id,
    })) as Template
    const result = await template({ id: original.id })

    expect(result).toEqual(null)
  })
})
