import { createComponent } from 'react-fela';

export default (rule) => Component => createComponent(rule, Component, Object.keys);
