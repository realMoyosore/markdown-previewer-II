<script setup lang="ts">
import { cn } from '@/lib/utils';
interface Props {
  variant?: 'default' | 'ghost' | 'icon';
  size?: 'default' | 'icon';
  class?: string;
  disabled?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
});
</script>

<template>
  <button
    :class="cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
      variant === 'ghost' ? 'hover:bg-accent hover:text-accent-foreground' : '',
      size === 'icon' ? 'h-9 w-9' : 'h-9 px-4 py-2',
      props.class
    )"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>