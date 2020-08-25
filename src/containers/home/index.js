import React from 'react';
import {connect} from 'react-redux';
import {increaseHome, decreaseHome} from './action';
import { useTranslation } from 'react-i18next';


// i18n translations might still be loaded by the http backend
// use react's Suspense
function Home(props) {
  const { t } = useTranslation('home');
  const {count} = props;
  return (<div>
      <h1>{t('title', {aaaaa: '1234'})}</h1>
    <p>{t('description.part1', {aaaaa: 'adfjdlskfjas'})}</p>
    <p>{t('description.part2')}</p>

    <button onClick={props.increaseHome}>Home Increase</button>
    <button onClick={props.decreaseHome}>Home Decrease</button>
    <h1>Value for home {count}</h1>
  </div>);
}
const mapStateToProps = state => ({
  count: state.homeReducer.count,
});

const mapDispatchToProps = {
  increaseHome,
  decreaseHome,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);