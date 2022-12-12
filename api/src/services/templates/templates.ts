import { Prisma } from '@prisma/client'

import type {
  QueryResolvers,
  MutationResolvers,
  TemplateRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const templates: QueryResolvers['templates'] = ({ count }) => {
  let resultCount = count || 10
  return db.$queryRaw(Prisma.sql`
    SELECT * FROM "Template" ORDER BY RANDOM() LIMIT ${resultCount}
  `)
}

export const template: QueryResolvers['template'] = ({ id }) => {
  return db.template.findUnique({
    where: { id },
  })
}

export const createTemplate: MutationResolvers['createTemplate'] = ({
  input,
}) => {
  return db.template.create({
    data: input,
  })
}

export const updateTemplate: MutationResolvers['updateTemplate'] = ({
  id,
  input,
}) => {
  return db.template.update({
    data: input,
    where: { id },
  })
}

export const deleteTemplate: MutationResolvers['deleteTemplate'] = ({ id }) => {
  return db.template.delete({
    where: { id },
  })
}

export const Template: TemplateRelationResolvers = {
  query: (_obj, { root }) => {
    return db.template.findUnique({ where: { id: root?.id } }).query()
  },
}
