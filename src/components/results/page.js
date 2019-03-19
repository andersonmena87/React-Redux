import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '../appBar'

function Page(porps) {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar />
    </Fragment>
  );
}

export default Page;