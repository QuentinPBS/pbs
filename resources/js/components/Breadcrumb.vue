<template>
    <div class="bg-base-100">
        <div class="text-sm breadcrumbs wrapper">
            <ul>
                <li v-for="(item, i) in items">
                    <router-link class="underline" v-if="items.length - 1 !== i" :to="item.link">
                        {{ item.name }}
                    </router-link>
                    <p v-else>{{ item.name }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Breadcrumb',

    props: ['items'],
}
</script>