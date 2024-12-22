// src/utils/cookieUtils.js
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

// 쿠키 설정 함수
export const setCookie = (name: string, value: any, options = {}) => {
  cookies.set(name, value, {
    path: '/', // 기본 경로 설정
    ...options, // 옵션 병합
  });
};

// 쿠키 가져오기 함수
export const getCookie = (name: string) => {
  return cookies.get(name);
};

// 쿠키 삭제 함수
export const removeCookie = (name: string, options = {}) => {
  cookies.remove(name, {
    path: '/', // 삭제 시에도 path를 설정해야 함
    ...options,
  });
};