### labelchat 时序图

```mermaid
sequenceDiagram
	autonumber
	actor User	
    participant web as Web Browser
    participant Transfer
    participant MiniMax
    
    User->>+web: Send
    web->>+Transfer: labelMiniMaxRequest
    Note left of Transfer: text
    Transfer->>+MiniMax: chatcompletionRequest
    Note left of MiniMax: Prompt
    loop num<5
    	MiniMax-->>-Transfer: chatcompletionResponse
        alt is create label task
        	Transfer-->>Transfer: doCreateLabelTask
        	loop num<5
                Transfer->>+MiniMax: chatcompletionRequest                
    			Note left of MiniMax: Prompt
                MiniMax-->>-Transfer: chatcompletionResponse
            end
        else is create label
            Transfer-->>Transfer: doCreateLabel
            loop num<5
            	Transfer->>+MiniMax: chatcompletionRequest            	
    			Note left of MiniMax: Prompt
            	MiniMax-->>-Transfer: chatcompletionResponse
            end
        end
      end
      Transfer-->>-web: labelMiniMaxResponse
      web-->>-User: Render
```





### 遇到的问题

- cron表达式解析



### 下一步计划

- 要不要结合产品做出来
- 标签的规则，考虑引入codex模型，直接转化为sql（难度较大）
- 结合ncc，【立即执行】给人打标签





记录执行失败率日志。

优化模型

优化提示词



code-gen-->codeX(gpt4)

sqlgpt

提供表结构

