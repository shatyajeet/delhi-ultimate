import React from 'react';

import Header from './header';
import Footer from './footer';

import '../../styles/styles.scss';

const Template = ({
	children
}) => {
  return (
    <div>
      <Header />
			{children}
			<Footer/>
    </div>
  );
};

export default Template;
