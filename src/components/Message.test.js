import React from 'react';
import { shallow, render } from 'enzyme';

import Message from './Message';

test('Message rendering', () => {
  const component = shallow(
    <Message heading="Testing">
      <p>Message content</p>
    </Message>
  );
  expect(component).toMatchSnapshot();
});

test('Message rendering with icon', () => {
  const Icon = () => 'Sample icon SVG';
  const component = render(
    <Message heading="Testing" icon={ Icon }>
      <p>Message content</p>
    </Message>
  );
  expect(component).toMatchSnapshot();
});
