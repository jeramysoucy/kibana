/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

/*
 * NOTICE: Do not edit this file manually.
 * This file is automatically generated by the OpenAPI Generator, @kbn/openapi-generator.
 *
 * info:
 *   title: Lists API client for tests
 *   version: Bundle (no version)
 */

import {
  ELASTIC_HTTP_VERSION_HEADER,
  X_ELASTIC_INTERNAL_ORIGIN_REQUEST,
} from '@kbn/core-http-common';

import { CreateListRequestBodyInput } from '@kbn/securitysolution-lists-common/api/create_list/create_list.gen';
import { CreateListItemRequestBodyInput } from '@kbn/securitysolution-lists-common/api/create_list_item/create_list_item.gen';
import { DeleteListRequestQueryInput } from '@kbn/securitysolution-lists-common/api/delete_list/delete_list.gen';
import { DeleteListItemRequestQueryInput } from '@kbn/securitysolution-lists-common/api/delete_list_item/delete_list_item.gen';
import { ExportListItemsRequestQueryInput } from '@kbn/securitysolution-lists-common/api/export_list_items/export_list_items.gen';
import { FindListItemsRequestQueryInput } from '@kbn/securitysolution-lists-common/api/find_list_items/find_list_items.gen';
import { FindListsRequestQueryInput } from '@kbn/securitysolution-lists-common/api/find_lists/find_lists.gen';
import { ImportListItemsRequestQueryInput } from '@kbn/securitysolution-lists-common/api/import_list_items/import_list_items.gen';
import { PatchListRequestBodyInput } from '@kbn/securitysolution-lists-common/api/patch_list/patch_list.gen';
import { PatchListItemRequestBodyInput } from '@kbn/securitysolution-lists-common/api/patch_list_item/patch_list_item.gen';
import { ReadListRequestQueryInput } from '@kbn/securitysolution-lists-common/api/read_list/read_list.gen';
import { ReadListItemRequestQueryInput } from '@kbn/securitysolution-lists-common/api/read_list_item/read_list_item.gen';
import { UpdateListRequestBodyInput } from '@kbn/securitysolution-lists-common/api/update_list/update_list.gen';
import { UpdateListItemRequestBodyInput } from '@kbn/securitysolution-lists-common/api/update_list_item/update_list_item.gen';
import { FtrProviderContext } from '../ftr_provider_context';

export function SecuritySolutionApiProvider({ getService }: FtrProviderContext) {
  const supertest = getService('supertest');

  return {
    createList(props: CreateListProps) {
      return supertest
        .post('/api/lists')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana')
        .send(props.body as object);
    },
    createListIndex() {
      return supertest
        .post('/api/lists/index')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana');
    },
    createListItem(props: CreateListItemProps) {
      return supertest
        .post('/api/lists/items')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana')
        .send(props.body as object);
    },
    deleteList(props: DeleteListProps) {
      return supertest
        .delete('/api/lists')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana')
        .query(props.query);
    },
    deleteListIndex() {
      return supertest
        .delete('/api/lists/index')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana');
    },
    deleteListItem(props: DeleteListItemProps) {
      return supertest
        .delete('/api/lists/items')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana')
        .query(props.query);
    },
    /**
     * Exports list item values from the specified list
     */
    exportListItems(props: ExportListItemsProps) {
      return supertest
        .post('/api/lists/items/_export')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana')
        .query(props.query);
    },
    findListItems(props: FindListItemsProps) {
      return supertest
        .get('/api/lists/items/_find')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana')
        .query(props.query);
    },
    findLists(props: FindListsProps) {
      return supertest
        .get('/api/lists/_find')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana')
        .query(props.query);
    },
    /**
      * Imports a list of items from a `.txt` or `.csv` file. The maximum file size is 9 million bytes.

You can import items to a new or existing list.

      */
    importListItems(props: ImportListItemsProps) {
      return supertest
        .post('/api/lists/items/_import')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana')
        .query(props.query);
    },
    patchList(props: PatchListProps) {
      return supertest
        .patch('/api/lists')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana')
        .send(props.body as object);
    },
    patchListItem(props: PatchListItemProps) {
      return supertest
        .patch('/api/lists/items')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana')
        .send(props.body as object);
    },
    readList(props: ReadListProps) {
      return supertest
        .get('/api/lists')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana')
        .query(props.query);
    },
    readListIndex() {
      return supertest
        .get('/api/lists/index')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana');
    },
    readListItem(props: ReadListItemProps) {
      return supertest
        .get('/api/lists/items')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana')
        .query(props.query);
    },
    readListPrivileges() {
      return supertest
        .get('/api/lists/privileges')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana');
    },
    updateList(props: UpdateListProps) {
      return supertest
        .put('/api/lists')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana')
        .send(props.body as object);
    },
    updateListItem(props: UpdateListItemProps) {
      return supertest
        .put('/api/lists/items')
        .set('kbn-xsrf', 'true')
        .set(ELASTIC_HTTP_VERSION_HEADER, '2023-10-31')
        .set(X_ELASTIC_INTERNAL_ORIGIN_REQUEST, 'kibana')
        .send(props.body as object);
    },
  };
}

export interface CreateListProps {
  body: CreateListRequestBodyInput;
}
export interface CreateListItemProps {
  body: CreateListItemRequestBodyInput;
}
export interface DeleteListProps {
  query: DeleteListRequestQueryInput;
}
export interface DeleteListItemProps {
  query: DeleteListItemRequestQueryInput;
}
export interface ExportListItemsProps {
  query: ExportListItemsRequestQueryInput;
}
export interface FindListItemsProps {
  query: FindListItemsRequestQueryInput;
}
export interface FindListsProps {
  query: FindListsRequestQueryInput;
}
export interface ImportListItemsProps {
  query: ImportListItemsRequestQueryInput;
}
export interface PatchListProps {
  body: PatchListRequestBodyInput;
}
export interface PatchListItemProps {
  body: PatchListItemRequestBodyInput;
}
export interface ReadListProps {
  query: ReadListRequestQueryInput;
}
export interface ReadListItemProps {
  query: ReadListItemRequestQueryInput;
}
export interface UpdateListProps {
  body: UpdateListRequestBodyInput;
}
export interface UpdateListItemProps {
  body: UpdateListItemRequestBodyInput;
}
