# lexicographic-path-encoding

```ts
console.log(lexicographic_path.encode("/simple/paths/now/is/supported"))                             
// "KJsimple"Jpaths"Jnow"Jis"Jsupported!"

console.log(lexicographic_path.decode(lexicographic_path.encode("/simple/paths/now/is/supported")))  
// "/simple/paths/now/is/supported"
```

A string is considered a path if it satisfy the following RE:
```ts
const RE_PATH = /^(\/[a-zA-Z0-9.#_:-]+)+$/
```

lexicographic ordering is provided through the charwise (https://github.com/dominictarr/charwise) encoding
