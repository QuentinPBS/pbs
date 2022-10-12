<template>
  <div>
    <DropZone
      :maxFiles="1"
      :multipleUpload="false"
      :uploadOnDrop="false"
      @addedFile="onFileAdd"
      :maxFileSize="10000000"
    >
      <template v-slot:message
        >
        <p class="p-4">Cliquer ici pour importer le fichier</p>
        <small> Le fichier ne doit pas dépasser 10Mo </small>
        </template
      >
    </DropZone>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { DropZone } from "dropzone-vue";
export default {
  setup() {
    const state = reactive({
      type: 2,
      file: null,
    });

    return {
      state,
    };
  },

  components: {
    DropZone,
  },
  methods: {
    onFileAdd(file) {
      console.log(file);
    },
  },
};
</script>

<style>
</style>