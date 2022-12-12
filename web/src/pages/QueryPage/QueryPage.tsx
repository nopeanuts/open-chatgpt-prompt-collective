import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import TemplateQueryCell from 'src/components/TemplateQueryCell'

const QueryPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Query" description="Query page" />

      <h1>Test a Prompt!</h1>
      <TemplateQueryCell id={id} />
    </>
  )
}

export default QueryPage
