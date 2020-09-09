import {  screen } from '@testing-library/react'

import Logo from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import 'jest-styled-components';

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    //renderizar o componente `render`
    //selecionar o elemento a ser testado `screen` (queries) - getByLabel ...
    //expect - assertion - asserção - comparação
    renderWithTheme(<Logo/>)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({color:'#FAFAFA'})
  })

  it('should render a black label when color is passed', () => {
    //renderizar o componente `render`
    //selecionar o elemento a ser testado `screen` (queries) - getByLabel ...
    //expect - assertion - asserção - comparação
    renderWithTheme(<Logo color="black"/>)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({color:'#030517'})
  })

  it('should render a normal logo when size is default', () => {
    //renderizar o componente `render`
    //selecionar o elemento a ser testado `screen` (queries) - getByLabel ...
    //expect - assertion - asserção - comparação
    renderWithTheme(<Logo/>)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({width:'11rem'})
  })

  it('should render a bigger logo', () => {
    //renderizar o componente `render`
    //selecionar o elemento a ser testado `screen` (queries) - getByLabel ...
    //expect - assertion - asserção - comparação
    renderWithTheme(<Logo size="large"/>)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({width:'20rem'})

  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo hideOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})