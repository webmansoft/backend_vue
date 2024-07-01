import { request } from '@/utils/request.js'

export default {
	/**
	 * 获取验证码
	 * @returns {*}
	 */
	getCaptcha() {
		return request({
			url: '/backend/captcha',
			method: 'get',
		})
	},

	/**
	 * 用户登录
	 * @param params
	 * @returns {*}
	 */
	login(params = {}) {
		return request({
			url: '/backend/login',
			method: 'post',
			data: params,
		})
	},

	/**
	 * 用户退出
	 * @param params
	 * @returns {*}
	 */
	logout(params = {}) {
		return request({
			url: '/backend/logout',
			method: 'post',
			data: params,
		})
	},

	/**
	 * 获取登录用户信息
	 * @param params
	 * @returns {*}
	 */
	getUserInfo(params = {}) {
		return request({
			url: '/backend/admin/getUserInfo',
			method: 'get',
			data: params,
		})
	}
}
