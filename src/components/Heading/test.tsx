import {  screen } from '@testing-library/react'

import Heading from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    //renderizar o componente `render`
    //selecionar o elemento a ser testado `screen` (queries) - getByLabel ...
    //expect - assertion - asserção - comparação
    renderWithTheme(<Heading>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i})).toHaveStyle({color:'#FAFAFA'})
  })

  it('should render a black heading when color as passed', () => {
    //renderizar o componente `render`
    //selecionar o elemento a ser testado `screen` (queries) - getByLabel ...
    //expect - assertion - asserção - comparação
    renderWithTheme(<Heading color="black">Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i})).toHaveStyle({color:'#030517'})
  })

  it('should render a heading whith a line to the left side', () => {
    //renderizar o componente `render`
    //selecionar o elemento a ser testado `screen` (queries) - getByLabel ...
    //expect - assertion - asserção - comparação
    renderWithTheme(<Heading lineLeft>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i})).toHaveStyle({
      'border-left':'0.7rem solid #3CD3C1'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>)
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })

})
