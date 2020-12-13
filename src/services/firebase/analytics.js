import firebase from './index';

firebase.analytics();

const analyticsEvent = (event, params) => {
  return firebase.analytics().logEvent(event, params);
};

export { analyticsEvent };
