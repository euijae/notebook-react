import React from 'react';
import { Tab } from 'semantic-ui-react';
import {ConceptReact, Background, Redux1, Redux2, Store, Reducer, Reference} from './concepts'

const panes = [
  {
    menuItem: 'React',
    render: () => <Tab.Pane attached={false}><ConceptReact /></Tab.Pane>,
  },
  {
    menuItem: 'Background',
    render: () => <Tab.Pane attached={false}><Background /></Tab.Pane>,
  },
  {
    menuItem: 'Redux - 1',
    render: () => <Tab.Pane attached={false}><Redux1 /></Tab.Pane>,
  },
  {
    menuItem: 'Redux - 2',
    render: () => <Tab.Pane attached={false}><Redux2 /></Tab.Pane>,
  },
  {
    menuItem: 'Store',
    render: () => <Tab.Pane attached={false}><Store /></Tab.Pane>,
  },
  {
    menuItem: 'Reducer',
    render: () => <Tab.Pane attached={false}><Reducer /></Tab.Pane>,
  },
  {
    menuItem: 'Reference',
    render: () => <Tab.Pane attached={false}><Reference /></Tab.Pane>,
  },
]

const Concept = () => (
  <Tab menu={{ secondary: true, pointing: true }} className='concept-box' panes={panes} />
)

export default Concept;
