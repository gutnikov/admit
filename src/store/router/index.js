import { push, replace, goBack } from 'connected-react-router';

/**
 * @param {String|Url.Base} url
 * @param {boolean} replaceState
 */
export function routeTo(url, replaceState = false) {
  return function(dispatch) {
    const action = replaceState ? replace : push;
    dispatch(action(String(url)));
  };
}

export function routeBack() {
  return function(dispatch) {
    dispatch(goBack());
  };
}
