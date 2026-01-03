<script setup lang="ts">
import { 
  Upload, 
  Save, 
  UploadCloud, 
  DownloadCloud, 
  FileText 
} from 'lucide-vue-next';
import Button from '@/components/ui/Button.vue';

defineProps<{
  isLoading: boolean;
}>();

const emit = defineEmits<{
  (e: 'load-file', event: Event): void;
  (e: 'save-file'): void;
  (e: 'save-api'): void;
  (e: 'load-api'): void;
}>();

// Wrapper to cast Event target to HTMLInputElement for the parent
const onFileChange = (e: Event) => emit('load-file', e);
</script>

<template>
  <header class="flex items-center justify-between h-14 px-4 border-b bg-background">
    <div class="flex items-center">
      <FileText class="w-6 h-6 mr-2" />
      <h1 class="text-xl font-bold tracking-tight">Markdown Previewer</h1>
    </div>

    <div class="flex items-center gap-2">
      
      <label for="file-upload" class="cursor-pointer" title="Upload from device (.md)">
        <Button variant="ghost" size="icon" :disabled="isLoading" class="pointer-events-none">
          <Upload class="h-4 w-4" />
        </Button>
        <input
          id="file-upload"
          type="file"
          accept=".md,.txt"
          class="hidden"
          @change="onFileChange"
          :disabled="isLoading"
        />
      </label>

      <Button 
        variant="ghost" 
        size="icon" 
        @click="emit('save-file')" 
        :disabled="isLoading"
        title="Save to Computer (.md)"
      >
        <Save class="h-4 w-4" />
      </Button>

      <div class="h-6 w-px bg-border mx-2"></div>

      <Button 
        variant="ghost" 
        size="icon" 
        @click="emit('save-api')" 
        :disabled="isLoading"
        title="Save to Cloud"
      >
        <UploadCloud class="h-4 w-4" />
      </Button>

      <Button 
        variant="ghost" 
        size="icon" 
        @click="emit('load-api')" 
        :disabled="isLoading"
        title="Load from Cloud"
      >
        <DownloadCloud class="h-4 w-4" />
      </Button>

      <span v-if="isLoading" class="text-sm animate-pulse ml-2">Processing...</span>
    </div>
  </header>
</template>