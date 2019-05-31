Vue  有自己的脚手架   vue-cli (2.0)   @vue/cli (3.0)

用之前 需要在全局安装一下：
    npm i @vue/cli -g  或者  yarn add @vue/cli global

使用  vue -V 来检测 是否安装成功； 出现版本号 代表安装成功；

一台电脑只要安装一次就够了；
若安装成功之后 ； 我们就可以使用了
 
 切到你自己对应的文件夹，运行cmd命令 打开命令窗口
 vue create  自己的项目名称

以上是新建项目的过程，工作时，一般是维护老项目
维护时 我们要做的过程

1、克隆远程项目到本地
2、进入项目， 运行 npm i  或者 yarn   去下载安装左右的项目依赖
3、依赖安装完成之后  一般都是  npm run dev  或者 npm  run  serve， 具体需要看 package.json 中的 script项；

// ****  若项目是使用 yarn 安装的依赖， 就一直用yarn
//       若是npm 安装的   就一直用 npm ; 两者不能混用；会互相删除各自的某些依赖