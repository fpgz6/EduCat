<template>
	<div class="login_continer">
		<div class="icon"><img src="https://pingxi.github.io/learn/EduCat.png" alt=""></div>
		<input v-model="username" class="pass_input" type="text" value="" placeholder="请输入用户名">
		<input v-model="phonenum" class="pass_input" type="text" value="" placeholder="请输入手机号">
		<input v-model="password0" class="pass_input" type="password" placeholder="请输入密码">
		<input v-model="password" class="pass_input" type="password" placeholder="请重复密码">
		<button class="pass_btn" @click="login">{{submit_stu}}</button>
		<p class="pass_tips">
			<router-link to='/login' tag='a'>{{edu}}</router-link>
			<router-link to='/login' tag='a'>{{countered}}</router-link>
		</p>
	</div>
</template>

<script>
	import axios from 'axios'
	import qs from "qs"
	export default {
		name: 'Register',
		data() {
			return {
				username: '',
				phonenum: '',
				password0: '',
				password: '',
				submit_stu: '立即注册成为学生',
				submit_edu: '立即注册成为老师',
				edu: '注册成为老师？',
				type: 0,
				countered: '已有账号？'
			}
		},
		methods: {
			login: function() {
				axios.post('http://localhost:3000/api/v1/users/register',qs.stringify({
						username: this.username,
						password: this.password,
						type: this.type,
						phonenum: this.phonenum
					}))
					.then(function(response) {
						console.log(response);
					})
					.catch(function(error) {
						console.log(error);
					});
			}
		}
	}
</script>

<style>
	.login_continer {
		width: 100%;
		height: 100%;
	}

	.login_continer .icon {
		margin-bottom: 2rem;
	}

	.login_continer .icon img {
		width: 20rem;
	}

	.pass_input {
		width: 20rem;
		height: 2.5rem;
		margin: 1rem 0;
		text-indent: 1rem;
		border-radius: .3rem;
		border: 1px solid #e2e2e2;
		outline: none;
	}

	.pass_btn {
		background: #42B983;
		color: #fff;
		width: 20rem;
		height: 2.5rem;
		border: none;
		border-radius: .3rem;
		margin-top: 1rem;
		outline: none;
	}

	.pass_tips a {
		color: #555;
		text-decoration: none;
	}
</style>
