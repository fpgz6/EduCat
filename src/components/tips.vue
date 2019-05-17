<template>
  <div class="tips">
		{{msg}}
  </div>
</template>

<script>
export default {
  name: 'Tips',
  data () {
    return {
      msg: '注册成功！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tips{
	background: rgba(200,200,200,.2);
	position: fixed;
	top: 2rem;
	left: 2rem;
	right: 2rem;
	line-height: 2rem;
	border-radius: 3rem;
}
</style>
