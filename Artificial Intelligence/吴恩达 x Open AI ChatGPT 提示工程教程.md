git地址：https://github.com/datawhalechina/prompt-engineering-for-developers

英文原版地址：[ChatGPT Prompt Engineering for Developers](https://learn.deeplearning.ai/)

中文字幕视频地址：[吴恩达 x OpenAI的Prompt Engineering课程专业翻译版](https://www.bilibili.com/video/BV1Bo4y1A7FU/?share_source=copy_web)

### 一、介绍

### 二、使用准则

原则1：写出清晰且具体的指令

​	策略1：使用分隔符来明确指出输入的不同部分。eg:""", ```, ---, <>, <tag></tag>

​	策略2：要求一个结构化的输出。eg:HTML, JSON

​	策略3：要求模型检查条件是否得到满足。

​	策略4：几句简短的提示语：要求模型做你想让它做的实际任务之前，提供成功执行的例子。

原则2：给模型思考的时间

​	策略1：指定完成一项任务所需的步骤。

​	策略2：指示模型在急于得出结论之前，找出自己的解决方案。



模型的限制：

​	幻觉（hallucination）：给出一些看似合理的语句，但并不是真的，如介绍了一款虚拟产品。

​	减少幻觉：首先找到相关信息，然后基于这些相关信息进行回答。

### 三、迭代优化

​	Prompt 指南：

- 清晰且具体的指令
- 分析为什么没有给出想要是输出
- 完善思路和提示
- 重复

### 四、文本概括Summarizing

​	eg: 电商系统，对客户评价内容进行摘要总结，剔除不必要的文字。

### 五、模型推理Inferring

​	eg:  提取标签、提取名字、情感分析、**信息提取**、提取新闻主题（零示例学习算法）

### 六、文本转换Transforming

- 文本翻译
- 语气/风格调整
- 格式转换：JSON、HTML、XML、Markdown
- 拼写及语法纠正

### 七、文本扩展Expanding

- 定制客户邮件
- 使用temperature参数。可靠可预测temperature等于0，更有创意性temperature更接近于1。

### 八、聊天机器人

- 订餐机器人
  - role:system、user、assistant
  - 上下文

### 九、总结

