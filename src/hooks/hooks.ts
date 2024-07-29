import groupBy from 'lodash/groupBy';
import keyBy from 'lodash/keyBy';
import { useMemo } from 'react';

export function useGroupBy<T>(data: T[] | undefined, key: string): Record<string, T[]> {
  return useMemo(() => groupBy(data, key), [data, key]);
}

export function useKeyBy<T>(data: T[] | undefined, key: string): Record<string, T> {
  return useMemo(() => keyBy(data, key), [data, key]);
}
