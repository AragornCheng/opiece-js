---
outline: deep
---

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()

function sayHello() {
    alert('hello world')
}
</script>

<h1>{{ site.title }}</h1>

<button type="button" style="background: #888;border-radius:16px; padding: 0 8px;" @click="sayHello">hello world</button>