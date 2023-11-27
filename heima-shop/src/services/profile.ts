import { http } from '@/utils/http';
import type { ProfileDetail, ProfileParams } from '@/types/member';

/**
 * 获取个人信息
 */
export const getMemberProfile = () => {
  return http<ProfileDetail>({
    method: 'GET',
    url: '/member/profile',
  })
}

/**
 * 修改个人信息
 * @param data 请求体参数
 */
export const putMemberProfile= (data: ProfileParams) => {
  return http<ProfileDetail>({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
