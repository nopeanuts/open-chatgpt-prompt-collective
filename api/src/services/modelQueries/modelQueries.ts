import type {
  QueryResolvers,
  MutationResolvers,
  ModelQueryRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const modelQueries: QueryResolvers['modelQueries'] = () => {
  return db.modelQuery.findMany()
}

export const modelQuery: QueryResolvers['modelQuery'] = ({ id }) => {
  return db.modelQuery.findUnique({
    where: { id },
  })
}

export const createModelQuery: MutationResolvers['createModelQuery'] = ({
  input,
}) => {
  return db.modelQuery.create({
    data: input,
  })
}

export const updateModelQuery: MutationResolvers['updateModelQuery'] = ({
  id,
  input,
}) => {
  return db.modelQuery.update({
    data: input,
    where: { id },
  })
}

export const deleteModelQuery: MutationResolvers['deleteModelQuery'] = ({
  id,
}) => {
  return db.modelQuery.delete({
    where: { id },
  })
}

export const ModelQuery: ModelQueryRelationResolvers = {
  template: (_obj, { root }) => {
    return db.modelQuery.findUnique({ where: { id: root?.id } }).template()
  },
}
