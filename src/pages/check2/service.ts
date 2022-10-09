import { request } from 'umi';


export async function setParams(params: any) {
    return request('/api/setparams', {
        method: 'POST',
        data: params,
    });
}

export async function getParams() {
    return request('/api/getparams');
}
