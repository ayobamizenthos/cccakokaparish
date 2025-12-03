import * as Sentry from '@sentry/browser';
import { BrowserTracing } from '@sentry/tracing';
import { Replay } from '@sentry/replay';

export const initializeSentry = () => {
  const dsn = import.meta.env.VITE_SENTRY_DSN;

  if (dsn && import.meta.env.PROD) {
    Sentry.init({
      dsn,
      integrations: [
        new BrowserTracing({
          tracePropagationTargets: ['localhost', /^https:\/\/your-domain\.com/],
        }),
        new Replay({
          maskAllText: true,
          blockAllMedia: true,
        }),
      ],
      // Performance Monitoring
      tracesSampleRate: 1.0, // Capture 100% of the transactions
      // Session Replay
      replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%
      replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
      environment: import.meta.env.VITE_NODE_ENV || 'development',
      beforeSend(event) {
        // Filter out development errors in production
        if (import.meta.env.DEV && event.exception) {
          return null;
        }
        return event;
      },
    });
  }
};

export const captureException = (error: Error, context?: Record<string, any>) => {
  if (import.meta.env.PROD) {
    Sentry.captureException(error, {
      tags: {
        component: 'church-website',
      },
      extra: context,
    });
  } else {
    console.error('Error captured:', error, context);
  }
};

export const captureMessage = (message: string, level: Sentry.SeverityLevel = 'info', context?: Record<string, any>) => {
  if (import.meta.env.PROD) {
    Sentry.withScope((scope) => {
      scope.setTags({
        component: 'church-website',
      });
      if (context) {
        scope.setExtras(context);
      }
      Sentry.captureMessage(message, level);
    });
  } else {
    console.log(`[${level.toUpperCase()}] ${message}`, context);
  }
};