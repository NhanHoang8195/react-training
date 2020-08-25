import React  from 'react';
import { useTranslation } from 'react-i18next';
import {decreaseAbout, increaseAbout} from './action';
import {connect} from 'react-redux';

// i18n translations might still be loaded by the http backend
// use react's Suspense
function About(props) {
  const { t } = useTranslation('about');
  const { count } = props;
  return (<div>
    <h1>{t('title')}</h1>
    <p>{t('description.part1')}</p>
    <p>{t('description.part2')}</p>
    <button onClick={props.increaseAbout}>About Increase</button>
    <button onClick={props.decreaseAbout}>About Decrease</button>
    <h1>Value for about {count}</h1>
  </div>);
}

const mapStateToProps = state => ({
  count: state.aboutReducer.count,
});

const mapDispatchToProps = {
  increaseAbout,
  decreaseAbout,
};

export default connect(mapStateToProps, mapDispatchToProps)(About);