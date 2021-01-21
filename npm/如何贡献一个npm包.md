# 如何贡献一个npm包

[TOC]

## 创建一个package.js文件

### 1.创建`package.json`

1. 创建一个包目录

   ```
   mkdir package-name
   ```

2. 切换到包目录

   ```
   cd /path/to/package-name
   ```

3. 初始化

   ```
   npm init;                         // for unscoped modules
   npm init --scope=@scope-name;     // for scoped modules
   ```

### 2.注意事项

- `name`属性必有：是你的包的命名，由一个小写单词组成，可使用中划线`-` 和 下划线`_`拼接。
- `version`属性必有：格式必须`x.x.x`。符合[语义版本控制准则](https://docs.npmjs.com/about-semantic-versioning)

## 创建Node.js模块

### 1.创建将在其他应用程序需要您的模块时加载的文件

​	在文件中，添加一个函数作为`exports`对象的属性。这将使该功能可用于其他代码：

```javascript
exports.printMsg = function() {
  console.log("This is a message from the demo package");
}
```

### 2.测试

1. 将您的软件包发布到npm：

   - 对于 [private packages](https://docs.npmjs.com/creating-and-publishing-private-packages#publishing-private-packages)和 [unscoped packages](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages#publishing-unscoped-public-packages)，请使用`npm publish`。
   - 对于 [scoped public packages](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages#publishing-scoped-public-packages),，请使用`npm publish --access public`

2. 在命令行上，在项目目录之外创建一个新的测试目录。

   ```
   mkdir test-dir
   ```

3. 切换到新目录：

   ```
   cd /path/to/test-dir
   ```

4. 在测试目录中，安装模块：

   ```
   npm install <your-module-name>
   ```

5. 在测试目录中，创建一个`test.js`文件，该文件需要您的模块并以一种方法调用您的模块。

6. 在命令行上，运行`node test.js`。将显示发送到console.log的消息。

## 关于README

​	为了帮助其他人在npm上找到您的软件包并在他们的项目中使用代码有良好的经验，我们建议在您的软件包目录中包含一个README文件。

​	您的自述文件可能包含安装，配置和使用程序包中的代码的说明，以及用户可能会有所帮助的任何其他信息。自述文件将显示在软件包页面上。

​	npm软件包README文件必须位于软件包的根目录下。

## 创建和发布unscoped公有包

> **注意：**您只能将无作用域的软件包发布到npm公共注册表。您无法将无作用域的程序包发布到npm Enterprise注册表。

作为npm用户，您可以创建在自己的项目中使用的不受作用域的软件包，并将它们发布到npm公共注册表中，供其他人在其项目中使用。无作用域的软件包始终是公共的，并且仅由软件包名称引用：

```
package-name
```

有关包范围，访问和可见性的更多信息，请参阅“[包范围，访问级别和可见性](https://docs.npmjs.com/package-scope-access-level-and-visibility)”。

> **注意：**必须先[注册](https://www.npmjs.com/signup)一个npm用户帐户，然后才能发布公共的无作用域npm程序包。

### 1.创建一个unscoped公有包

1. 在命令行上，为您的包创建一个目录：

   ```
   mkdir my-test-package
   ```

2. 导航到包的根目录：

   ```
   cd my-test-package
   ```

3. 如果您使用git来管理软件包代码，请在软件包根目录中运行以下命令，`git-remote-url`是你软件包的git远程URL：

   ```
   git init
   git remote add origin git://git-remote-url
   ```

4. 在软件包根目录中，运行`npm init`命令。

5. 响应提示以生成[`package.json`](https://docs.npmjs.com/about-package-json-and-package-lock-json-files)文件。有关命名软件包的帮助，请参阅“[软件包名称准则](https://docs.npmjs.com/package-name-guidelines)”。

6. 创建一个[README文件](https://docs.npmjs.com/about-package-readme-files)，说明您的程序包代码是什么以及如何使用它。

7. 在您喜欢的文本编辑器中，为您的程序包编写代码。

### 2.查看包装内容以获取敏感或不必要的信息

​	将敏感信息发布到注册表可能会损害用户，损害开发基础结构，修复成本高昂，并使您面临法律诉讼的风险。**我们强烈建议您在将程序包发布到注册表之前，删除敏感信息，例如私钥，密码，[个人身份信息] [pii] （PII）和信用卡数据。**即使您的软件包是私有的，但如果将该软件包公开或下载到可供更多用户访问的计算机上，则可能会暴露敏感信息。

​	对于不太敏感的信息，例如测试数据，请使用`.npmignore`或`.gitignore`文件来防止发布到注册表。有关更多信息，请参见[本文](https://docs.npmjs.com/misc/developers#keeping-files-out-of-your-package)。

### 3.测试

​	为了减少发布错误的机会，建议您在将程序包发布到npm注册表之前对其进行测试。要测试您的软件包，`npm install`请使用软件包目录的完整路径运行：

```
npm install my-package
```

### 4.发布unscoped公有包

1. 在命令行上，导航到包的根目录。

   ```
   cd /path/to/package
   ```

2. 要将公共软件包发布到npm注册表，请运行：

   ```
   npm publish
   ```

3. 要查看您的公共软件包页面，请访问[https://npmjs.com/package/*package-name ](https://npmjs.com/package/*package-name)*，将***package-name 替换*为您的软件包名称。公共软件包将`public`在npm网站上的软件包名称下方显示。

## 创建和发布scoped公有包

要在用户或组织名称空间中公开共享代码，可以将公共用户范围或组织范围的程序包发布到npm注册表。

有关范围的更多信息，请参见“[关于范围](https://docs.npmjs.com/about-scopes)”。

> **注意：**必须先[注册](https://www.npmjs.com/signup)一个npm用户帐户，然后才能发布用户范围的npm软件包。
>
> 此外，要发布组织范围的软件包，您必须[创建一个npm用户帐户](https://www.npmjs.com/signup)，然后[创建一个npm organization](https://www.npmjs.com/signup?next=/org/create)。

### 1.创建一个scoped公有包

1. 如果您使用npmrc来[管理多个注册表](https://docs.npmjs.com/configuring-your-registry-settings-as-an-npm-enterprise-user)上的[帐户](https://docs.npmjs.com/configuring-your-registry-settings-as-an-npm-enterprise-user)，请在命令行上切换到适当的配置文件：

   ```
   npmrc <profile-name>
   ```

2. 在命令行上，为您的包创建一个目录：

   ```
   mkdir my-test-package
   ```

3. 导航到包的根目录：

   ```
   cd my-test-package
   ```

4. 如果您使用git来管理软件包代码，请在软件包根目录中运行以下命令，`git-remote-url`是你软件包的git远程URL：

   ```
   git init
   git remote add origin git://git-remote-url
   ```

5. 在软件包根目录中，运行`npm init`命令，并使用`scope`标识范围。

   - 对于组织范围的程序包，请替换`my-org`为您的组织名称：

     ```
     npm init --scope=@my-org
     ```

   - 对于用户范围的软件包，请`my-username`用您的用户名替换：

     ```
     npm init --scope=@my-username
     ```

6. 响应提示以生成[`package.json`](https://docs.npmjs.com/about-package-json-and-package-lock-json-files)文件。有关命名软件包的帮助，请参阅“[软件包名称准则](https://docs.npmjs.com/package-name-guidelines)”。

7. 创建一个[README文件](https://docs.npmjs.com/about-package-readme-files)，说明您的程序包代码是什么以及如何使用它。

8. 在您喜欢的文本编辑器中，为您的程序包编写代码。

### 2.查看包装内容以获取敏感或不必要的信息

​	将敏感信息发布到注册表可能会损害用户，损害开发基础结构，修复成本高昂，并使您面临法律诉讼的风险。**我们强烈建议您在将程序包发布到注册表之前，删除敏感信息，例如私钥，密码，[个人身份信息] [pii] （PII）和信用卡数据。**即使您的软件包是私有的，但如果将该软件包公开或下载到可供更多用户访问的计算机上，则可能会暴露敏感信息。

​	对于不太敏感的信息，例如测试数据，请使用`.npmignore`或`.gitignore`文件来防止发布到注册表。有关更多信息，请参见[本文](https://docs.npmjs.com/misc/developers#keeping-files-out-of-your-package)。

### 3.测试

​	为了减少发布错误的机会，建议您在将程序包发布到npm注册表之前对其进行测试。要测试您的软件包，`npm install`请使用软件包目录的完整路径运行：

```
npm install my-package
```

### 4.发布scoped公有包

1. 在命令行上，导航到包的根目录。

   ```
   cd /path/to/package
   ```

2. 要将公共软件包发布到npm注册表，请运行：

   ```
   npm publish --access public
   ```

3. 要查看您的公共软件包页面，请访问[https://npmjs.com/package/*package-name ](https://npmjs.com/package/*package-name)*，将***package-name 替换*为您的软件包名称。公共软件包将`public`在npm网站上的软件包名称下方显示。

## 创建和发布私有包

要与一组有限的用户或团队共享代码，您可以将私有的用户范围或组织范围的程序包发布到npm注册表。

有关范围和私有软件包的更多信息，请参见“[关于范围](https://docs.npmjs.com/about-scopes)”和“[关于私有软件包](https://docs.npmjs.com/about-private-packages)”。

> **注意：**必须先[注册](https://npmjs.com/signup)一个付费的npm用户帐户，然后才能发布私人用户范围的npm软件包。
>
> 此外，要发布私有组织范围的软件包，您必须[创建一个npm用户帐户](https://npmjs.com/signup)，然后[ 创建一个付费npm organization](https://www.npmjs.com/signup?next=/org/create)。

### 1.创建一个私有包

1. 如果您使用npmrc来[管理多个注册表](https://docs.npmjs.com/configuring-your-registry-settings-as-an-npm-enterprise-user)上的[帐户](https://docs.npmjs.com/configuring-your-registry-settings-as-an-npm-enterprise-user)，请在命令行上切换到适当的配置文件：

   ```
   npmrc <profile-name>
   ```

2. 在命令行上，为您的包创建一个目录：

   ```
   mkdir my-test-package
   ```

3. 导航到包的根目录：

   ```
   cd my-test-package
   ```

4. 如果您使用git来管理软件包代码，请在软件包根目录中运行以下命令，`git-remote-url`是你软件包的git远程URL：

   ```
   git init
   git remote add origin git://git-remote-url
   ```

5. 在软件包根目录中，运行`npm init`命令，并使用`scope`标识范围。

   - 对于组织范围的程序包，请替换`my-org`为您的组织名称：

     ```
     npm init --scope=@my-org
     ```

   - 对于用户范围的软件包，请`my-username`用您的用户名替换：

     ```
     npm init --scope=@my-username
     ```

6. 响应提示以生成[`package.json`](https://docs.npmjs.com/about-package-json-and-package-lock-json-files)文件。有关命名软件包的帮助，请参阅“[软件包名称准则](https://docs.npmjs.com/package-name-guidelines)”。

7. 创建一个[README文件](https://docs.npmjs.com/about-package-readme-files)，说明您的程序包代码是什么以及如何使用它。

8. 在您喜欢的文本编辑器中，为您的程序包编写代码。

### 2.查看包装内容以获取敏感或不必要的信息

​	将敏感信息发布到注册表可能会损害用户，损害开发基础结构，修复成本高昂，并使您面临法律诉讼的风险。**我们强烈建议您在将程序包发布到注册表之前，删除敏感信息，例如私钥，密码，[个人身份信息] [pii] （PII）和信用卡数据。**即使您的软件包是私有的，但如果将该软件包公开或下载到可供更多用户访问的计算机上，则可能会暴露敏感信息。

​	对于不太敏感的信息，例如测试数据，请使用`.npmignore`或`.gitignore`文件来防止发布到注册表。有关更多信息，请参见[本文](https://docs.npmjs.com/misc/developers#keeping-files-out-of-your-package)。

### 3.测试

​	为了减少发布错误的机会，建议您在将程序包发布到npm注册表之前对其进行测试。要测试您的软件包，`npm install`请使用软件包目录的完整路径运行：

```
npm install my-package
```

### 4.发布私有包

1. 在命令行上，导航到包的根目录。

   ```
   cd /path/to/package
   ```

2. 要将公共软件包发布到npm注册表，请运行：

   ```
   npm publish
   ```

3. 要查看您的公共软件包页面，请访问[https://npmjs.com/package/*package-name ](https://npmjs.com/package/*package-name)*，将***package-name 替换*为您的软件包名称。公共软件包将`private`在npm网站上的软件包名称下方显示。