/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { getIpRangeQuery, getIsValidFullIp } from './ip_search';

export type OptionsListSearchTechnique = 'prefix' | 'wildcard' | 'exact';

export const getDefaultSearchTechnique = (type: string): OptionsListSearchTechnique | undefined => {
  const compatibleSearchTechniques = getCompatibleSearchTechniques(type);
  return compatibleSearchTechniques.length > 0 ? compatibleSearchTechniques[0] : undefined;
};

export const getCompatibleSearchTechniques = (type?: string): OptionsListSearchTechnique[] => {
  switch (type) {
    case 'string': {
      return ['prefix', 'wildcard', 'exact'];
    }
    case 'ip': {
      return ['prefix', 'exact'];
    }
    case 'number': {
      return ['exact'];
    }
    default: {
      return [];
    }
  }
};

export const isValidSearch = ({
  searchString,
  fieldType,
  searchTechnique,
}: {
  searchString?: string;
  fieldType?: string;
  searchTechnique?: OptionsListSearchTechnique;
}): boolean => {
  if (!searchString || searchString.length === 0) return true;

  switch (fieldType) {
    case 'number': {
      return !isNaN(Number(searchString));
    }
    case 'date': {
      /** searching is not currently supported for date fields */
      return false;
    }
    case 'ip': {
      if (searchTechnique === 'exact') {
        /**
         * exact match searching will throw an error if the search string isn't a **full** IP,
         * so we need a slightly different validity check here than for other search techniques
         */
        return getIsValidFullIp(searchString);
      }
      return getIpRangeQuery(searchString).validSearch;
    }
    default: {
      /** string searches are always considered to be valid */
      return true;
    }
  }
};
