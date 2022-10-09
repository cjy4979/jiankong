import { request } from 'umi';
import type { MeasureDetials } from './data.d';

export async function queryBasicProfile(): Promise<{
  data: {
    // basicProgress: BasicProgress[];
    // basicGoods: BasicGood[];
    MeasureDetials: MeasureDetials[];
  };
}> {
  return request('/api/measuredetails');
}
