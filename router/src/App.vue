<script setup lang="ts">
import { env } from './types/helper';
import { info } from '@/apis/user';
// console.log(typeof import.meta.env.VITE_ROUTE_AUTOLOAD);
// console.log(typeof env.VITE_SOME_KEY);
const response = await info();
console.log(response);
</script>

<template>
    <ul class="bg-red-800">
        <li>首页</li>
        <li>商品</li>
        <li>评价</li>
    </ul>
    <router-view />
</template>

<style></style>
