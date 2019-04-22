# lexicographic-path-encoding

```ts
console.log(lexicographic_path.encode("/simple/paths/now/is/supported"))                             
// "KJsimple"Jpaths"Jnow"Jis"Jsupported!"

console.log(lexicographic_path.decode(lexicographic_path.encode("/simple/paths/now/is/supported")))  
// "/simple/paths/now/is/supported"
```
