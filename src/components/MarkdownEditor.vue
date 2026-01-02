<script setup lang="ts">
import { ref, watch, computed, onMounted, shallowRef } from 'vue';
import { marked } from 'marked';
import { Codemirror } from 'vue-codemirror';
import { markdown as markdownLang } from '@codemirror/lang-markdown';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import Toolbar from './Toolbar.vue';

// --- Default Data ---
const defaultMarkdown = `
# Welcome to my Vue Markdown Previewer!

## Your sub-headings go here...

### Other text can be **bold** or _italic_.
#### You can also combine them... **_bold and italic!_** \`<div></div>\`
#### And of course, there are lists:

1. First ordered list item
2. Second ordered list item
3. Third ordered list item

- Unordered list item 1
- Unordered list item 2
- Unordered list item 3

You can add logos like this one:
![Vue Logo](https://vuejs.org/images/logo.png)

And of course, links:
[Visit Vue](https://vuejs.org)

Feel free to edit this markdown and see the preview update in real-time!

Happy coding! \`:) \`
`;

const LOCAL_STORAGE_KEY = 'markdown-content';

// --- State ---
const markdown = ref<string>('');
const isLoading = ref(false);
const lastPostId = ref<number | null>(null);

// --- Initialization ---
onMounted(() => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  markdown.value = stored || defaultMarkdown;
});

// --- Watchers (Auto-save to LocalStorage) ---
let timeoutHandler: number;
watch(markdown, (newValue) => {
  clearTimeout(timeoutHandler);
  timeoutHandler = setTimeout(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, newValue);
  }, 500);
});

// --- Computed Properties ---
const renderedMarkdown = computed(() => {
  return marked.parse(markdown.value, { breaks: true, gfm: true });
});

// --- Codemirror Configuration ---
// shallowRef is recommended for editor extensions to avoid unnecessary deep reactivity performance costs
const extensions = shallowRef([markdownLang(), okaidia]);

// --- Handlers ---

const handleFileLoad = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      markdown.value = text;
    };
    reader.readAsText(file);
  }
};

const handleFileSave = () => {
  const blob = new Blob([markdown.value], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'document.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const handleSaveToApi = async () => {
  isLoading.value = true;
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'My Markdown Content',
        body: markdown.value,
        userId: 1,
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    const data = await response.json();
    lastPostId.value = data.id;
    alert(`Content saved with ID: ${data.id}`);
  } catch (error) {
    console.error('Failed to save content:', error);
    alert('Error saving content.');
  } finally {
    isLoading.value = false;
  }
};

const handleLoadFromApi = async () => {
  const id = prompt("Enter the ID of the content to load:", String(lastPostId.value || ''));
  if (!id) return;

  isLoading.value = true;
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) throw new Error('Post not found');
    const data = await response.json();
    markdown.value = data.body;
    lastPostId.value = data.id;
  } catch (error) {
    console.error('Failed to load content:', error);
    alert('Error loading content.');
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="flex flex-col h-screen">
    <Toolbar 
      :is-loading="isLoading"
      @load-file="handleFileLoad" 
      @save-file="handleFileSave" 
      @save-api="handleSaveToApi" 
      @load-api="handleLoadFromApi" 
    />
    
    <main class="flex-grow flex flex-row max-[520px]:flex-col overflow-hidden">
      <div class="w-1/2 max-[520px]:w-full h-full max-[520px]:h-1/2 mr-px overflow-hidden bg-[#272822]">
        <Codemirror
          v-model="markdown"
          placeholder="Type markdown here..."
          :style="{ height: '100%' }"
          :autofocus="true"
          :indent-with-tab="true"
          :tab-size="2"
          :extensions="extensions"
        />
      </div>

      <div class="border-l border-gray-300 max-[520px]:border-l-0 max-[520px]:border-t" />

      <div class="w-1/2 max-[520px]:w-full h-full max-[520px]:h-1/2 p-4 overflow-y-auto bg-background">
        <div
          id="preview"
          v-html="renderedMarkdown"
          class="prose dark:prose-invert max-w-none"
        ></div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Ensure CodeMirror takes full height */
:deep(.cm-editor) {
  height: 100%;
}
</style>