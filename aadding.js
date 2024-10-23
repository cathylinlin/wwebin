function adding()
{
    // 获取用户输入的两个数字
    let num2 = parseFloat(document.getElementById('num2').value);
    let num1 = parseFloat(document.getElementById('num1').value);
  
    // 做加法
    sum = num2+num1;

    // 判断是否是数字
    if (isNaN(num1) || isNaN(num2)) {
        console.error("请输入有效的数字");
      }
    else{
    // 显示数字
    const button = document.getElementById("cal");  // 选择按钮
    button.addEventListener("click", function(){alert(sum);});
    }
}