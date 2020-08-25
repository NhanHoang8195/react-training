import React  from 'react';
import { useTranslation } from 'react-i18next';
import {decreaseUser} from './action';
import {connect} from 'react-redux';
import {Button, TextField} from '@material-ui/core';

// i18n translations might still be loaded by the http backend
// use react's Suspense
function User() {
  const { t } = useTranslation('user');
  return (<div>
    <h1>{t('title')}</h1>
    <p>{t('description.part1')}</p>
    <p>{t('description.part2')}</p>
    <Button>adjklsdj</Button>
    <TextField />
  </div>);
}

const mapStateToProps = state => ({
  count: state.userReducer.count,
});

const mapDispatchToProps = {
  // increaseUser: increaseUser,
  decreaseUser1: decreaseUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);