<?php 
if(isset($_GET['mobile'])){

	// 获取提交的手机号
	$mobile = $_GET['mobile'];
	
	// 返回验证码 随机
	echo  rand(1000,9999);
	
}else{
	echo '请正确传递参数';
}
	// echo 返回

	sleep(1);

 ?>