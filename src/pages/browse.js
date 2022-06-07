import React from 'react'
import { useContent } from '../hooks'

export default function Browse() {
  // we need the series and films
  const { series } = useContent('series')
  const { films } = useContent('films')
  // we need slides
  // pass iyt into browse container

  return <p>Hello from browse!</p>
}
