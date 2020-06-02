import React from 'react';
import { Tab } from 'semantic-ui-react';
import ConceptReact from './concepts/ConceptReact';
import Problem from './concepts/Problem';
import Redux1 from './concepts/Redux1';
import Redux2 from './concepts/Redux2';
import Store from './concepts/Store';
import Reducer from './concepts/Reducer';
import Dispatch from './concepts/Dispatch';
import Reference from './concepts/Reference';

const panes = [
  {
    menuItem: 'React',
    render: () => <Tab.Pane attached={false}><ConceptReact /></Tab.Pane>,
  },
  {
    menuItem: 'Background',
    render: () => <Tab.Pane attached={false}><Problem /></Tab.Pane>,
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
    menuItem: 'Dispatch',
    render: () => <Tab.Pane attached={false}><Dispatch /></Tab.Pane>,
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
