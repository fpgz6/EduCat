9876<template>
	<div class="login_continer">
		<div class="icon"><img src="https://pingxi.github.io/learn/EduCat.png" alt=""></div>
		<input class="pass_input" type="text" placeholder="请输入用户名">
		<input class="pass_input" type="text" placeholder="请输入手机号">
		<input class="pass_input" type="text" placeholder="请输入验证码">
		<input class="pass_btn" type="submit" placeholder="立即登录">
		<p class="pass_tips">
			 <router-link to='/forget' tag='a'>忘记密码？</router-link>
			 <router-link to='/register' tag='a'>立即注册</router-link>
		</p>
	</div>
</template>

<script>
</script>

<style>
	.login_continer{
		width: 100%;
		height: 100%;
	}
	.login_continer .icon{
		margin-bottom: 2rem;
	}
	.login_continer .icon img{
		width: 20rem;
	}
	.pass_input{
		width: 20rem;
		height: 2.5rem;
		margin: 1rem 0;
		text-indent: 1rem;
		border-radius: .3rem;
		border: 1px solid #e2e2e2;
		outline: none;
	}
	.pass_btn{
		background: #42B983;
		color: #fff;
		width: 20rem;
		height: 2.5rem;
		border: none;
		border-radius: .3rem;
		margin-top: 1rem;
	}
	.pass_tips a{
		color: #555;
		text-decoration: none;
	}
</style>
