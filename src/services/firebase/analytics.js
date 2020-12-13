import firebase from './index';

firebase.analytics();

const analyticsEvent = (event, params) => {
  firebase.analytics().logEvent(event, params);
};

export { analyticsEvent };
