## 配置

### 1.配置elasticsearch-7.6.0/config/elasticsearch.yml

```yml

# 集群名称
cluster.name: aitec
#
# ------------------------------------ Node ------------------------------------
#
# Use a descriptive name for the node:
# 自己节点名称
node.name: node-1d
node.master: true
node.data: true
#
# Add custom attributes to the node:
#
#node.attr.rack: r1
#
# ----------------------------------- Paths ------------------------------------
#
# Path to directory where to store the data (separate multiple locations by comma):
# 配置工作空间-数据存储
path.data: D:/elasticsearch-7.6.0/workspace/data
#
# Path to log files:
# 配置工作空间-日志存储
path.logs: D:/elasticsearch-7.6.0/workspace/logs
#
# ----------------------------------- Memory -----------------------------------
#
# Lock the memory on startup:
#
#bootstrap.memory_lock: true
#
# Make sure that the heap size is set to about half the memory available
# on the system and that the owner of the process is allowed to use this
# limit.
#
# Elasticsearch performs poorly when the system is swapping the memory.
#
# ---------------------------------- Network -----------------------------------
#
# Set the bind address to a specific IP (IPv4 or IPv6):
# 配置主机host
network.host: 0.0.0.0
#
# Set a custom port for HTTP:
# 配置端口号
http.port: 9200
#
# For more information, consult the network module documentation.
# 跨域配置
http.cors.enabled: true
http.cors.allow-origin: "*"
# --------------------------------- Discovery ----------------------------------
#
# Pass an initial list of hosts to perform discovery when this node is started:
# The default list of hosts is ["127.0.0.1", "[::1]"]
# 配置种子地址
discovery.seed_hosts: ["127.0.0.1", "10.10.32.60","10.10.32.17","10.30.131.38"]
#
# Bootstrap the cluster using an initial set of master-eligible nodes:
# 配置集群上节点
cluster.initial_master_nodes: ["node-ld","casedev", "node-zy", "node-zl"]
```

### 2.配置elasticsearch-7.6.0/bin/elasticsearch-env.bat

```diff
+  set ES_HOME = "D:/elasticsearch-7.6.0"

+  set JAVA="%ES_HOME%\jdk\bin\java.exe"
+  set JAVA_HOME="%ES_HOME%\jdk"
+  set JAVA_TYPE=bundled jdk
  
```

### 3.elasticsearch-7.6.0/config下添加 analysis 文件夹

### 4.elasticsearch-7.6.0/plugins 下添加ik文件夹

### 5.参数说明

```yml
cluster.name    集群名称，相同名称为一个集群
node.name   节点名称，集群模式下每个节点名称唯一
node.master     当前节点是否可以被选举为master节点，是：true、否：false
node.data   当前节点是否用于存储数据，是：true、否：false
path.data   索引数据存放的位置
path.logs   日志文件存放的位置
bootstrap.memory_lock   需求锁住物理内存，是：true、否：false
bootstrap.system_call_filter    SecComp检测，是：true、否：false
network.host    监听地址，用于访问该es
network.publish_host    可设置成内网ip，用于集群内各机器间通信
http.port   es对外提供的http端口，默认 9200
discovery.seed_hosts    es7.x 之后新增的配置，写入候选主节点的设备地址，在开启服务后可以被选为主节点
cluster.initial_master_nodes    es7.x 之后新增的配置，初始化一个新的集群时需要此配置来选举master
http.cors.enabled   是否支持跨域，是：true，在使用head插件时需要此配置
http.cors.allow-origin  "*" 表示支持所有域名

我们要只需要在之前的基础上，打开配置文件elasticsearch.yml，添加如下三个配置：
    #集群名称
    cluster.name: my-es  
    #主节点名称
    node.name: node-master 
    #当前节点是否可以被选举为master节点，是：true、否：false
    node.master: true 

    #写入候选主节点的设备地址，在开启服务后可以被选为主节点
    discovery.seed_hosts: ["192.168.43.96", "192.168.43.96", "192.168.43.96"]
    #初始化一个新的集群时需要此配置来选举master
    cluster.initial_master_nodes: ["node-1"]

修改完配置文件之后，只需要重新服务即可。
```



## 启动

在 elasticsearch-7.6.0/bin 下运行 `elasticsearch-env.bat`	(windows系统)

- 单机验证：http://127.0.0.1:9200/

- 集群验证：http://127.0.0.1:9200/_cat/health?v