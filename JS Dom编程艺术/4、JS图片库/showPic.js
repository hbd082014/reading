function showPic(whichpic) {                   //whichpic是参数，也代表着元素节点
    var source = whichpic.getAttribute("href");//把href参数传递给getattribute，并存入变量source
    var placeholder = document.getElementById("placeholder"); //赋予变量placeholder
    placeholder.setAttribute("src", source); //使用src属性进行刷新，一个是属性名，一个是属性值
}//点击某个链接时，把占位图片替换为那个链接对应的图片

//其实不使用setattribute方法也可以改变图片的src属性
