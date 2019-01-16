import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ExampleComponent from '.';

storiesOf('ExampleComponent', module)
  .add('default', () => (
    <ExampleComponent text="Put your content here :D" />
  ));
