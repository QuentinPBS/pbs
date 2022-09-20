<template>
    <div class="bg-base-100">
        <div class="text-sm breadcrumbs wrapper">
            <ul>
                <li v-for="(item, i) in items">
                    <a class="underline" v-if="items.length - 1 !== i" :href="item.link">
                        {{ item.name }}
                    </a>
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