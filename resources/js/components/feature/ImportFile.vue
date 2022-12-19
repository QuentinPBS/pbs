<template>
  <div>
    <DropZone
      :maxFiles="1"
      :multipleUpload="false"
      :uploadOnDrop="false"
      @addedFile="onFileAdd"
      :maxFileSize="10000000"
    >
      <template v-slot:message>
        <p class="p-4">{{$t('feature.step.click_here_to_import_file')}}</p>
        <small> {{$t('feature.step.file_not_exceed_10')}} </small>
      </template>
    </DropZone>
  </div>

  <div class="flex justify-end py-4">
    
    <button class="btn bg-red-500 text-white mr-2" @click="$emit('closeModal')">
      {{$t('cancel')}}
    </button>
    <button
      :class="[{ loading: state.isLoading }, 'btn bg-green-500 text-white']"
      v-if="state.file"
      @click="uploadFile()"
    >
          {{$t('feature.step.validate')}}
    </button>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { DropZone } from "dropzone-vue";
import featureDeliveryService from "../../services/featureDeliveryService.js";
export default {
  props: ["feature"],

  setup() {
    const state = reactive({
      type: 2,
      file: null,
      isLoading: false,
    });

    return {
      state,
    };
  },

  components: {
    DropZone,
  },
  methods: {
    onFileAdd(result) {
      this.state.file = result.file;
    },
    async uploadFile() {
      try {
        this.state.isLoading = true;
        let body = new FormData();
        body.append("id", this.feature.id);
        body.append("type", 2);
        body.append("user_id", this.$store.state.userStore.user.id);
        body.append("file", this.state.file);
        const response = await featureDeliveryService.importDeliveryFile(body);
        if (response.status === 201) {
          this.$emit("fileDelivered");
        }
      } catch (error) {
        this.state.isLoading = false;

        console.error(error);
      }
    },
  },
};
</script>

<style>
</style>