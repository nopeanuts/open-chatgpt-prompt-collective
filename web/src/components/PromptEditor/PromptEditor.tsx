import { Button, Badge, Skeleton, Tag, Text } from '@chakra-ui/react'
import { useMutation } from '@redwoodjs/web'
import { LabeledTextArea } from '@surfacedata/sd-components'

import { Liquid } from 'liquidjs'
import { useEffect, useState } from 'react'
import Editor from 'react-simple-code-editor'

import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-liquid'
import './prism.css'

const engine = new Liquid()

const PromptEditor = ({}) => {
  const [input, setInput] = useState('')
  const [content, setContent] = useState('')
  const [query, setQuery] = useState({})
  const [fields, setFields] = useState([])
  const [template, setTemplate] = useState(null)
  const [status, setStatus] = useState(
    <Badge colorScheme="purple">Empty</Badge>
  )

  const preparePrompt = async () => {
    const result = await engine.render(template, query)
    setInput(result)
  }

  const onValueChange = (value) => {
    try {
      const template = engine.parse(value)
      setTemplate(template)
      setStatus(<Badge colorScheme="green">Ready</Badge>)
    } catch (parseError) {
      console.log(parseError)
      setStatus(<Badge colorScheme="red">Error</Badge>)
    }
    setContent(value)
  }

  return (
    <div>
      <div className="border-2 border-black">
        <Editor
          value={content}
          onValueChange={onValueChange}
          className="border-black"
          highlight={(code) => highlight(code, languages.liquid, 'liquid')}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
      </div>
      <div>
        <div>{status}</div>
        <Button onClick={preparePrompt}>Prepare</Button>
      </div>
      <div>
        <Skeleton height="20px" isLoaded={input !== ''}>
          <Text fontSize="3xl">{input}</Text>
        </Skeleton>
      </div>
    </div>
  )
}

export default PromptEditor
