import type { TemplateQuery, TemplateQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { useRef } from 'react'

import { useMutation } from '@redwoodjs/web'
import { Button, LabeledTextarea } from '@surfacedata/sd-components'

export const QUERY = gql`
  query Template($id: Int!) {
    template(id: $id) {
      id
      category
      input
    }
  }
`

export const MUTATION = gql`
  mutation Generate($templateId: Int!, $input: String!) {
    generate(templateId: $templateId, input: $input) {
      id
      output
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<TemplateQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  template,
}: CellSuccessProps<TemplateQuery, TemplateQueryVariables>) => {
  const [generate, { loading, error, data }] = useMutation(MUTATION)
  const inputRef = useRef(null)
  const handleClick = () => {
    generate({
      variables: {
        templateId: template.id,
        input: inputRef.current.value,
      },
    })
  }

  return (
    <div>
      <LabeledTextarea defaultValue={template.input} ref={inputRef} />
      <Button onClick={handleClick}>Test</Button>

      {data && <div>{data.generate.output}</div>}
    </div>
  )
}
