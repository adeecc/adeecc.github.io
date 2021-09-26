---
title: 'Basic Markdown'
date: '26 Sep 2021'
tags: ['github', 'guide']
draft: false
summary: 'Very Basic MD File'
---

# This is a title

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eligendi iste, exercitationem dolores esse enim dolorem earum incidunt, explicabo animi asperiores ipsam ea molestias delectus aliquam. Fugiat aliquam fugit error soluta totam dolore quibusdam sit architecto asperiores eum itaque dolorem enim ipsum molestiae, corrupti recusandae nisi vel quo! Voluptas, quaerat.

## This is a secondary title

Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eligendi iste, exercitationem dolores esse enim dolorem earum incidunt, explicabo animi asperiores ipsam ea molestias delectus aliquam. Fugiat aliquam fugit error soluta totam dolore quibusdam sit architecto asperiores eum itaque dolorem enim ipsum molestiae, corrupti recusandae nisi vel quo! Voluptas, quaerat.

### TODOS:

- [ ] Get Math Working
- [ ] Ordered Lists
- [ ] Get Code Syntax highlighting - Working
- [ ] Get Links Working
- [ ] Get Block Quotes working

## Checks

1. Code

```js
import getAllFilesFrontMatter from 'lib/mdx';

const posts = await getAllFilesFrontMatter('blog');
```

2. Math

$$
\mathbf{X} = \left[\begin{array}
	{ccccc}
	x_{11} & . & . & . & x_{1k} \\
	. & . & . & . & .  \\
	. & . & . & . & .  \\
	. & . & . & . & .  \\
	x_{n1} & . & . & . & x_{nn}
\end{array}\right] =
\left[\begin{array}
	{c}
	\mathbf{x}'_1 \\
	. \\
	. \\
	. \\
	\mathbf{x}'_n
\end{array}\right]
$$

3. Links:

- [leerob.io](https://leerob.io/blog/tailwind)
- [timlrx.com](https://www.timlrx.com/)
