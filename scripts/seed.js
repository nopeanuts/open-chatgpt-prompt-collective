import { db } from 'api/src/lib/db'
import { supabaseClient } from 'api/src/lib/supabase'

import flan_templates from './flan_templates.json'

export default async () => {
  try {
    const data = Object.keys(flan_templates).flatMap((category) => {
      const examples = flan_templates[category]
      return examples.map(([input, output]) => ({
        category,
        input,
        output,
      }))
    })
    await db.template.deleteMany()
    const result = await db.template.createMany({
      data,
    })
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
