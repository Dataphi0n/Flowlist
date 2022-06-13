import React from 'react'
import { storiesOf } from '@storybook/react'

import Requirements from '../components/Requirements/Requirements'
import Flow from '../containers/FlowBuilder/Flow'

const stories = storiesOf('App Test', module)

stories.add('App', () => {
    return (<Flow EnterpriseId='59' />);
})