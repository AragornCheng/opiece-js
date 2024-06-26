---
outline: deep
---

<script setup>
import { useData } from 'vitepress'
import { getBrowserInfo, sum } from 'opiece.js'

sum(1, 2)
const ua = getBrowserInfo()
const { site, theme, page, frontmatter } = useData()

function sayHello() {
    alert('hello world')
}
</script>

<h1>{{ site.title }}</h1>

# 浏览器信息
<pre>{{ ua }}</pre>

<button type="button" style="background: #888;border-radius:16px; padding: 0 8px;" @click="sayHello">hello world</button>

<style>
pre {
    white-space: pre-wrap;
}
</style>