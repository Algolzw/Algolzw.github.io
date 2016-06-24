---
layout:	post
title:	"Markdown study"
categoryies:	jekyll update
---

Markdown
===========
----------------------

## 兼容html ##
markdown 只对应一小部分的html标签。

在其涵盖之外的所有标签都可以在文档中直接用HTML撰写

一些HTML块元素如`<div>`、`<tablr>`、`<pre>`、`<p>`等标签，必须在前后加上空行与其他内容隔开。
<table>
	<th>table in markdown</th>
	<tr>
		<td>
			Foo
		</td>
	</tr>
</table>

>注意：在HTML块标签块中的Markdown格式语法将不会被处理,但是在非块	级html标签中markdown语法可以随意使用。
	
在markdown格式的行中可以随意使用HTML标签（随个人喜好）。<br>

## 特殊字符转换 ##
在HTML中，“<”和"&"两种字符需要特殊处理，"<"需要用&lt；表示，“&”需要使用&amp；来表示。
  
在markdown中，则可以直接打出这些特殊符号，自动转换为实体。也可以打出实体形式，如：``&copy;``,会打印出"&copy;"符号。<br>

	需要注意在code范围里，<和&符号都会被转为实体形式。

## 标题 ##
语法1:类Setext

``=``表示最高阶标题，``-``表示第二阶标题

```
Title 1
============

Title 2
------------
```

任何数量的＝和－都有效果

语法2:类Atx

在行首插入1到6个＃

```
# 这是h1
## 这是h2
### 这是h3
```
## 区块引用 Blockquotes
类似Email中使用``>``的引用方式，如

```
>###hello
>live or death
>make a choice
```
效果：
>### hello
>live or death
>make a choice

## 列表 ##
无需列表使用星号、加号或减号作为列表标记：

```
* Red
* Blue
* Green
+ Red
- Blue
```
效果：

* Red
* Blue
* Green
+ Red
- Blue

有序列表使用数字加英文句点：

```
1. Red
2. Blue
3. Green
```
效果：

1. Red
2. Blue
3. Green

<p>#使用html标签pre和code得到<pre><code>
//do something
def funPlus(a,b):
	return a+b
</code></pre>
</p>

使用一个制表符得到pre块<br>
here is an example for python:

	def helloworld():
		print('helloworld')
		
	helloworld()

使用`\`\`\``得到：

```
def say():
	print("hello")
```


使用三个星号或减号或底线来建立分隔符，之间可以加空格如

	***
	* * *
	*****
	- - - 
	_________________
	

***

## 区段元素 ##
### 链接 ###
Markdown支持行内式和参考式两种链接语法，都使用[方括号]来标记。

行内式：

	这是个参考[链接](http://Algolzw.github.io "我的github主页")  －－－－双引号中的内容是title
	
效果：

这是是参考[链接](http://Algolzw.github.io "这是我的github主页")  －－－－双引号中的内容是title

其中链接的资源可以是相对路径

参考式：

	这是个参考[链接][homepage]参考式链接
	[homepage]:http://Algolzw.github.io "这是我的github主页"
效果：
这是个参考[链接][homepage]参考式链接
[homepage]: http://Algolzw.github.io "这是我的github主页"
其中``[homepage]:http://Algolzw.github.io "这是我的github主页"``可以写到文档的任何位置。

	链接网址也可以用方括号包起来，title可以用单引号双引号和括号包起来：
	[foo]: http://www.xx.com/ 'title'
	[foo]: <http://www.xx.com/> "title"
	[foo]: http://www.cx.com/ (title)
	也可以将title放到下一行,需要增加缩进
	[foo]: http://www.xx.com/login/user/something/
		"title in here"

### 强调 ###
Markdown 使用星号(`*`)和底线(`_`)作为强调字词的符号，一个`*`或`_`表示`<em>`,两个表示`<strong>`。

	*single asterisks*
	_single underscores
	**double asterisks**
	__double underscores__

效果：

*single asterisks*

_single underscores_

**double asterisks**

__double underscores__ 

<img src="/images/1.jpeg" height="150">

## Others ##


* 我的github主页：<http://Algolzw.github.io>
* 我的常用邮箱：	 <algo_lzw@yahoo.com>

*Thanks*