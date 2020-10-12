## http-server 无法加载文件 解决方案

使用http-server报错信息如下：

​    http-server : 无法加载文件 C:\Program Files\nodejs\node_global\http-server.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 http://go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。 

 

**解决方法：**

1、使用管理员权限打开工具软件（如vscode）

2、命令行执行：get-ExecutionPolicy，得到结果为Restricted，表示禁止状态

3、命令行执行：set-ExecutionPolicy RemoteSigned

4、再次执行命令：get-ExecutionPolicy，结果显示为RemoteSigned

5、执行http-server,运行成功。