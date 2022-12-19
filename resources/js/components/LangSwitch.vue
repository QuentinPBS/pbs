<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost">
      <p>{{ $i18n.locale }}</p>
    </label>
    <ul
      tabindex="0"
      class="
        mt-3
        p-2
        shadow
        menu menu-compact
        dropdown-content
        bg-base-100
        rounded-box
        w-52
      "
    >
      <li
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        class="mt-2"
        :class="{
          ' bg-blue-500 rounded-box w-100 text-white': $i18n.locale == locale,
        }"
      >
        <a @click.prevent="$i18n.locale = locale">{{ locale.toUpperCase() }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>