1.打开淘宝首页，console里写代码，统计出现了多少种html标签

> document.querySelectorAll("*")  // NodeList
>
> document.querySelectorAll("*") instanceof Array // false*
>
>
> [...document.querySelectorAll("*")] instanceof Array // true

```
new Set([...document.querySelectorAll("*")].map(v=>v.nodeName))
```

2.出现次数前5的html标签，各出险多少次

```
Object.entries(
		[...document.querySelectorAll("*")]
            .map(v=>v.nodeName)
            .reduce((ret,a)=>{
                ret[a]=(ret[a]||0)+1;
                return ret
                },{})
    	)
    .sort((a,b)=>b[1]-a[1])
    .slice(0,5)
    .map(v=>({'标签名：':v[0],'次数：':v[1]}))
    
    console.table(ret)
```

