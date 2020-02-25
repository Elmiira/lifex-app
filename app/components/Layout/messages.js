/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Layout';

export default defineMessages({
  Supplies: {
    id: `${scope}.supplies`,
    defaultMessage: 'Supplies',
  },
  Logout: {
    id: `${scope}.logout`,
    defaultMessage: 'log out',
  },
});
