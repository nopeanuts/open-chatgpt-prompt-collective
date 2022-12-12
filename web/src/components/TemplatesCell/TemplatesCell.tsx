import type { TemplatesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query TemplatesQuery {
    templates {
      id
      category
      input
      output
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ templates }: CellSuccessProps<TemplatesQuery>) => {
  return (
    <ul>
      {templates.map((item) => (
        <li key={item.id}>
          <Link key={item.id} to={routes.query({ id: item.id })}>
            {JSON.stringify(item)}
          </Link>
        </li>
      ))}
    </ul>
  )
}
