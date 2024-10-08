/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import { i18n } from '@kbn/i18n';
import { TutorialsCategory } from '../../services/tutorials';
import {
  onPremInstructions,
  cloudInstructions,
  onPremCloudInstructions,
} from '../instructions/metricbeat_instructions';
import {
  TutorialContext,
  TutorialSchema,
} from '../../services/tutorials/lib/tutorials_registry_types';

export function ibmmqMetricsSpecProvider(context: TutorialContext): TutorialSchema {
  const moduleName = 'ibmmq';
  return {
    id: 'ibmmqMetrics',
    name: i18n.translate('home.tutorials.ibmmqMetrics.nameTitle', {
      defaultMessage: 'IBM MQ Metrics',
    }),
    moduleName,
    category: TutorialsCategory.METRICS,
    shortDescription: i18n.translate('home.tutorials.ibmmqMetrics.shortDescription', {
      defaultMessage: 'Collect metrics from IBM MQ instances with Metricbeat.',
    }),
    longDescription: i18n.translate('home.tutorials.ibmmqMetrics.longDescription', {
      defaultMessage:
        'The `ibmmq` Metricbeat module fetches metrics from IBM MQ instances \
[Learn more]({learnMoreLink}).',
      values: {
        learnMoreLink: '{config.docs.beats.metricbeat}/metricbeat-module-ibmmq.html',
      },
    }),
    euiIconType: context.staticAssets.getPluginAssetHref('/logos/ibmmq.svg'),
    isBeta: true,
    artifacts: {
      application: {
        label: i18n.translate('home.tutorials.ibmmqMetrics.artifacts.application.label', {
          defaultMessage: 'Discover',
        }),
        path: '/app/discover#/',
      },
      dashboards: [],
      exportedFields: {
        documentationUrl: '{config.docs.beats.metricbeat}/exported-fields-ibmmq.html',
      },
    },
    completionTimeMinutes: 10,
    previewImagePath: context.staticAssets.getPluginAssetHref('/ibmmq_metrics/screenshot.webp'),
    onPrem: onPremInstructions(moduleName, context),
    elasticCloud: cloudInstructions(moduleName, context),
    onPremElasticCloud: onPremCloudInstructions(moduleName, context),
    integrationBrowserCategories: ['observability'],
  };
}
