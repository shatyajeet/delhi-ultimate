import React from 'react';
import {Router, browserHistory} from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import routes from './routes';

injectTapEventPlugin();

export default function App () {
  return (
  	<MuiThemeProvider>
			<Router history={browserHistory}>
				{routes}
			</Router>
		</MuiThemeProvider>
  );
};
