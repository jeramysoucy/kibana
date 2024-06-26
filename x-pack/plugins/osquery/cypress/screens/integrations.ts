/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

export const ADD_POLICY_BTN = 'addIntegrationPolicyButton';
export const CREATE_PACKAGE_POLICY_SAVE_BTN = 'createPackagePolicySaveButton';

export const DATA_COLLECTION_SETUP_STEP = 'dataCollectionSetupStep';
export const INTEGRATIONS_CARD = '.euiCard__titleAnchor';

export const INTEGRATION_NAME_LINK = 'integrationNameLink';

export const CONFIRM_MODAL_BTN = 'confirmModalConfirmButton';
export const CONFIRM_MODAL_BTN_SEL = `[data-test-subj=${CONFIRM_MODAL_BTN}]`;
export const TOAST_CLOSE_BTN = 'toastCloseButton';
export const TOAST_CLOSE_BTN_SEL = `[data-test-subj=${TOAST_CLOSE_BTN}]`;

export const SECURITY_SOLUTION_FLYOUT_TOUR = 'securitySolutionFlyoutTour-1';

export const SECURITY_SOLUTION_FLYOUT_TOUR_SEL = `[data-test-subj=${SECURITY_SOLUTION_FLYOUT_TOUR}]`;

export const SETTINGS_TAB = 'tab-settings';
export const POLICIES_TAB = 'tab-policies';

export const UPDATE_PACKAGE_BTN = 'updatePackageBtn';
export const LATEST_VERSION = 'latestVersion';

export const PACKAGE_VERSION = 'packageVersionText';
export const SAVE_PACKAGE_CONFIRM = '[data-test-subj=confirmModalConfirmButton]';

export const getAdvancedButton = () => cy.get(`[data-test-subj="advanced-accordion-content"]`);

export const DATE_PICKER_ABSOLUTE_TAB = 'superDatePickerAbsoluteTab';
export const DATE_PICKER_ABSOLUTE_TAB_SEL = `[data-test-subj=${DATE_PICKER_ABSOLUTE_TAB}]`;
