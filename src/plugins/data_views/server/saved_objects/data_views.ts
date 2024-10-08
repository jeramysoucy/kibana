/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import type { SavedObjectsType } from '@kbn/core/server';
import { ANALYTICS_SAVED_OBJECT_INDEX } from '@kbn/core-saved-objects-server';
import { indexPatternSavedObjectTypeMigrations } from './index_pattern_migrations';
import { DATA_VIEW_SAVED_OBJECT_TYPE } from '../../common';

export const dataViewSavedObjectType: SavedObjectsType = {
  name: DATA_VIEW_SAVED_OBJECT_TYPE,
  indexPattern: ANALYTICS_SAVED_OBJECT_INDEX,
  hidden: false,
  namespaceType: 'multiple',
  convertToMultiNamespaceTypeVersion: '8.0.0',
  management: {
    displayName: 'data view',
    icon: 'indexPatternApp',
    defaultSearchField: 'name',
    importableAndExportable: true,
    getTitle(obj) {
      return obj.attributes.name || obj.attributes.title;
    },
    getEditUrl(obj) {
      return `/management/kibana/dataViews/dataView/${encodeURIComponent(obj.id)}`;
    },
    getInAppUrl(obj) {
      return {
        path: `/app/management/kibana/dataViews/dataView/${encodeURIComponent(obj.id)}`,
        uiCapabilitiesPath: 'management.kibana.indexPatterns',
      };
    },
  },
  mappings: {
    dynamic: false,
    properties: {
      title: { type: 'text' },
      type: { type: 'keyword' },
      name: {
        type: 'text',
        fields: {
          keyword: {
            type: 'keyword',
          },
        },
      },
    },
  },
  migrations: indexPatternSavedObjectTypeMigrations,
};
