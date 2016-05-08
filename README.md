# 常用的jQuery拓展

## 目前实现的函数

### binds

给元素代理绑定若干个子元素的事件

```js
$('.selector').binds();
```

### serializeObject

将`form`表单序列化成对象

```js
$('.selector').serializeObject();
```

### hasAttr

判断一个元素是否设置了某个属性

```js
if ($('.selector').hasAttr('number')) {
  //do something
}
```
