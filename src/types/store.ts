import { SLICE_STATUS } from '@constants';

export * from '@store/types';

export type SliceStatus = (typeof SLICE_STATUS)[keyof typeof SLICE_STATUS];

export interface GenericSlice<T> {
  data: T;
  status: SliceStatus;
  error: Error | null;
}
