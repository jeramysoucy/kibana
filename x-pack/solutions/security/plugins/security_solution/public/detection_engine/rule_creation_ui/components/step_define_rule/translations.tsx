/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import { i18n } from '@kbn/i18n';
import { FormattedMessage } from '@kbn/i18n-react';

export const INDEX_HELPER_TEXT = i18n.translate(
  'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.indicesHelperDescription',
  {
    defaultMessage:
      'Enter the pattern of Elasticsearch indices where you would like this rule to run. By default, these will include index patterns defined in Security Solution advanced settings.',
  }
);

export const RESET_DEFAULT_INDEX = i18n.translate(
  'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.resetDefaultIndicesButton',
  {
    defaultMessage: 'Reset to default index patterns',
  }
);

export const IMPORT_TIMELINE_QUERY = i18n.translate(
  'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.importTimelineQueryButton',
  {
    defaultMessage: 'Import query from saved timeline',
  }
);

export const QUERY_BAR_LABEL = i18n.translate(
  'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.fieldQuerBarLabel',
  {
    defaultMessage: 'Custom query',
  }
);

export const SAVED_QUERY_FORM_ROW_LABEL = i18n.translate(
  'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.SavedQueryFormRowLabel',
  {
    defaultMessage: 'Saved query',
  }
);

export const getSavedQueryCheckboxLabel = (savedQueryName: string) =>
  i18n.translate(
    'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.fieldShouldLoadQueryDynamicallyLabel',
    {
      defaultMessage: 'Load saved query "{savedQueryName}" dynamically on each rule execution',
      values: { savedQueryName },
    }
  );

export const getSavedQueryCheckboxLabelWithoutName = () =>
  i18n.translate(
    'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.fieldShouldLoadQueryDynamicallyLabelWithoutName',
    {
      defaultMessage: 'Load saved query dynamically on each rule execution',
    }
  );

export const SOURCE = i18n.translate(
  'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.source',
  {
    defaultMessage: 'Source',
  }
);

export const DATA_SOURCE_GUIDE_SUB_TITLE = i18n.translate(
  'xpack.securitySolution.detections.dataSource.popover.title',
  {
    defaultMessage: 'Select a data source',
  }
);

export const DATA_SOURCE_GUIDE_TITLE = i18n.translate(
  'xpack.securitySolution.detections.dataSource.popover.subTitle',
  {
    defaultMessage: 'Data sources',
  }
);

export const DATA_SOURCE_GUIDE_CONTENT = i18n.translate(
  'xpack.securitySolution.detections.dataSource.popover.content',
  {
    defaultMessage: 'Rules can now query index patterns or data views.',
  }
);

export const RULE_PREVIEW_TITLE = i18n.translate(
  'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.rulePreviewTitle',
  {
    defaultMessage: 'Rule Preview',
  }
);

export const ALERT_SUPPRESSION_MISSING_FIELDS_FORM_ROW_LABEL = i18n.translate(
  'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.alertSuppressionMissingFieldsLabel',
  {
    defaultMessage: 'If a suppression field is missing',
  }
);

export const ALERT_SUPPRESSION_MISSING_FIELDS_SUPPRESS_OPTION = i18n.translate(
  'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.alertSuppressionMissingFieldsSuppressLabel',
  {
    defaultMessage: 'Suppress and group alerts for events with missing fields',
  }
);

export const ALERT_SUPPRESSION_MISSING_FIELDS_DO_NOT_SUPPRESS_OPTION = i18n.translate(
  'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.alertSuppressionMissingFieldsDoNotSuppressLabel',
  {
    defaultMessage: 'Do not suppress alerts for events with missing fields',
  }
);

export const ALERT_SUPPRESSION_PER_RULE_EXECUTION = i18n.translate(
  'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.alertSuppressionOptions.perRuleExecutionLabel',
  {
    defaultMessage: 'Per rule execution',
  }
);

export const ALERT_SUPPRESSION_PER_TIME_PERIOD = i18n.translate(
  'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.alertSuppressionOptions.perTimePeriodLabel',
  {
    defaultMessage: 'Per time period',
  }
);

export const THRESHOLD_SUPPRESSION_PER_RULE_EXECUTION_WARNING = i18n.translate(
  'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.Su.perRuleExecutionWarning',
  {
    defaultMessage: 'Per rule execution option is not available for Threshold rule type',
  }
);

export const getEnableThresholdSuppressionLabel = (fields: string[] | undefined) =>
  fields?.length ? (
    <FormattedMessage
      id="xpack.securitySolution.detectionEngine.createRule.stepDefineRule.ga.enableThresholdSuppressionForFieldsLabel"
      defaultMessage="Suppress alerts by selected fields: {fieldsString}"
      values={{ fieldsString: <strong>{fields.join(', ')}</strong> }}
    />
  ) : (
    i18n.translate(
      'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.ga.enableThresholdSuppressionLabel',
      {
        defaultMessage: 'Suppress alerts',
      }
    )
  );

export const MACHINE_LEARNING_SUPPRESSION_DISABLED_LABEL = i18n.translate(
  'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.machineLearningSuppressionDisabledLabel',
  {
    defaultMessage: 'To enable alert suppression, start relevant Machine Learning jobs.',
  }
);

export const MACHINE_LEARNING_SUPPRESSION_INCOMPLETE_LABEL = i18n.translate(
  'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.machineLearningSuppressionIncompleteLabel',
  {
    defaultMessage:
      'This list of fields might be incomplete as some Machine Learning jobs are not running. Start all relevant jobs for a complete list.',
  }
);

export const ALERT_SUPPRESSION_FIELDS_TECH_PREVIEW_LABEL_APPEND = i18n.translate(
  'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.alertSuppressionTechPreviewLabelAppend',
  {
    defaultMessage: 'Optional (Technical Preview)',
  }
);

export const ALERT_SUPPRESSION_FIELDS_GA_LABEL_APPEND = i18n.translate(
  'xpack.securitySolution.detectionEngine.createRule.stepDefineRule.alertSuppressionGALabelAppend',
  {
    defaultMessage: 'Optional',
  }
);
