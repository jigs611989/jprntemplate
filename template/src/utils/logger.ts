import * as Sentry from '@sentry/react-native';
import Config from 'react-native-config';

export const prettyPrintToConsole = (whatever: unknown, prefix = '') => {
  if (__DEV__) {
    console.log(`${prefix}\n${JSON.stringify(whatever, null, 2)}`);
  }
};

export const error = (e: unknown, msg?: string) => {
  console.log(
    `${`********  Error  ********\n${msg ?? ''}`}\n${e}\n${JSON.stringify(
      e,
      null,
      2
    )}`
  );
  if (__DEV__) {
    return;
  }
  Sentry.captureException(e);
};

export const init = () => {
  if (__DEV__) {
    return;
  }

  Sentry.init({
    dsn: Config.SENTRY_DSN,
  });
};

export const setUser = (userAddress: string) => {
  if (__DEV__) {
    return;
  }
  Sentry.setUser({username: userAddress});
};

export const captureEvent = (event: Sentry.Event) => {
  Sentry.captureEvent(event);
};

export const captureMessage = (message: string, extraData: any) => {
  Sentry.captureMessage(message, {
    extra: extraData,
    level: 'debug',
  });
};

const Logger = {
  init,
  error,
  prettyPrintToConsole,
  setUser,
  captureEvent,
  captureMessage,
};

export default Logger;
