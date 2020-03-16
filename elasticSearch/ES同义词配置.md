# ES同义词配置

官方文档说明地址：

https://www.elastic.co/guide/en/elasticsearch/reference/7.x/analysis-synonym-tokenfilter.html

## 存放路径

同义词文件的存放根路径：{esHome}/config/

```console
"synonym" : {
                        "type" : "synonym",
                        "synonyms_path" : "analysis/synonym.txt"
                    }
```

文件synonym.txt 的路径为: **{esHome}/config/analysis/synonym.txt**

## 文件格式：

```
日你姥姥,日你先人板板 => XXX
中华人民共和国,中国 => 中国
张无忌,阿牛,曾阿牛,无忌,教主 => 张无忌
```

编码：utf-8

## 代码示范

创建索引：

| METHOD | URL                          |
| ------ | ---------------------------- |
| POST   | 10.10.32.60:9200/chseg_index |

```json
{
    "settings": {
        "analysis": {
            "filter": {
                "word_sync": {
                    "type": "synonym",
                    "synonyms_path": "analysis/synonym_ch.txt"
                }
            },
            "analyzer": {
                "ik_sync_smart": {
                    "filter": [
                        "word_sync"
                    ],
                    "type": "custom",
                    "tokenizer": "ik_smart"
                }
            }
        }
    },
    "mappings": {
        "properties": {
            "goodsName": {
                "type": "text",
                "analyzer": "ik_sync_smart",
                "search_analyzer": "ik_sync_smart"
            },
            "goodsContent": {
                "type": "text",
                "analyzer": "ik_sync_smart",
                "search_analyzer": "ik_sync_smart"
            }
        }
    }
}
```

插入数据

| METHOD | URL                                 |
| ------ | ----------------------------------- |
| POST   | 10.10.32.60:9200/chseg_index/_doc/1 |

```json
{
    "goodsName": "张无忌大战光明顶",
    "goodsContent": "中华人民共和国的西北边陲光明顶聚集六大门派高手，珠儿带着阿牛沿路探寻到了此处"
}
```

查询
插入数据

| METHOD   | URL                                         |
| -------- | ------------------------------------------- |
| GET/POST | 10.10.32.60:9200/chseg_index/\_doc/\_search |

```json
{
  "query": {
    "match": {
      "goodsContent": "教主"
    }
  }
}
```

注解：插入的数据

<u>"中华人民共和国的西北边陲光明顶聚集六大门派高手，珠儿带着阿牛沿路探寻到了此处"</u>

并无 《教主》一词，但根据同义词配置，可以使用《教主》匹配到该内容中《阿牛》。

*删除索引*

| METHOD | URL                          |
| ------ | ---------------------------- |
|  DELETE| 10.10.32.60:9200/chseg_index |










