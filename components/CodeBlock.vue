<template>
    <div
        class="relative rounded-lg bg-[#1e1e1e] p-4 text-white w-full max-h-[500px] overflow-auto">
        <Button
            v-auto-animate
            variant="ghost"
            size="icon"
            @click="copyCode"
            class="absolute top-2 right-2 hover:bg-[#2d2d2d] hover:text-white">
            <Copy
                v-if="!copied"
                class="h-3 w-3" />
            <Check
                v-else
                class="h-3 w-3" />
        </Button>
        <pre class="whitespace-pre-wrap break-words font-mono text-sm flex">
        <code>{{code}}</code>
      </pre>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Copy, Check } from 'lucide-vue-next'

// Props
const props = defineProps({
    code: {
        type: String,
        required: true,
    },
})

// State to track if the code was copied
const copied = ref(false)

// Copy function
const copyCode = async () => {
    try {
        await navigator.clipboard.writeText(props.code)
        copied.value = true

        // Reset the copied state after 2 seconds
        setTimeout(() => {
            copied.value = false
        }, 2000)
    } catch (err) {
        console.error('Failed to copy text: ', err)
    }
}
</script>

