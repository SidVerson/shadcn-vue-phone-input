[Shadcn Vue Phone Input](https://shadcn-vue-phone-input.vercel.app/) is a phone input
component built as part of the Shadcn design system. It offers a blend of
customization and out-of-the-box styling, adhering to Shadcn's sleek and modern
design principles.

## Why

I needed a phone input component for a project. I looked around for any phone
input components that used Shadcn's design system, but I fond only [Shadcn Phone Input](https://shadcn-phone-input.vercel.app/). So,
I decided to this for vue myself, granted access from creator, created [base-vue-phone-input](https://www.npmjs.com/package/base-vue-phone-input?activeTab=readme) for customizable vue phone inputs. Hope you find it useful!

## Usage

### SPhoneInput.vue

```vue
<template>
    <PhoneInput
        noUseBrowserLocale
        fetchCountry
        class="flex"
        country-locale="en-EN"
        :ignored-countries="['AC']">
        <template #selector="{ inputValue, updateInputValue, countries }">
            <Popover v-model:open="open">
                <PopoverTrigger>
                    <Button
                        variant="outline"
                        class="flex gap-1 rounded-e-none rounded-s-lg px-3">
                        <FlagComponent :country="inputValue" />
                        <ChevronsUpDown class="-mr-2 h-4 w-4 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent class="w-[300px] p-0">
                    <Command>
                        <CommandInput placeholder="Search country..." />
                        <CommandEmpty>No country found.</CommandEmpty>
                        <CommandList>
                            <CommandGroup>
                                <CommandItem
                                    v-for="option in countries"
                                    :key="option.iso2"
                                    :value="option.name"
                                    class="gap-2"
                                    @select="
                                        () => {
                                            updateInputValue(option.iso2)
                                            open = false
                                            focused = true
                                        }
                                    ">
                                    <FlagComponent :country="option?.iso2" />
                                    <span class="flex-1 text-sm">{{
                                        option.name
                                    }}</span>
                                    <span class="text-foreground/50 text-sm">{{
                                        option.dialCode
                                    }}</span>
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </template>

        <template #input="{ inputValue, updateInputValue, placeholder }">
            <Input
                ref="phoneInput"
                class="rounded-e-lg rounded-s-none"
                type="text"
                :model-value="inputValue"
                @input="updateInputValue"
                :placeholder="placeholder" />
        </template>
    </PhoneInput>
</template>

<script lang="ts" setup>
import PhoneInput from 'base-vue-phone-input'
import { useFocus } from '@vueuse/core'
import { ChevronsUpDown } from 'lucide-vue-next'
import { FlagComponent } from '../../.nuxt/components'
const open = ref(false)
const phoneInput = ref(null)
const { focused } = useFocus(phoneInput)
</script>
```

### FlagComponent.vue

```vue
<template>
    <span class="bg-foreground/20 flex h-4 w-6 overflow-hidden rounded-sm">
        <img
            v-if="country"
            :src="flagUrl"
            :alt="countryName"
            :title="countryName" />
    </span>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
    country: {
        required: true,
    },
    countryName: {
        type: String,
        required: false,
    },
})

const flagUrl = computed(() => {
    return `https://flagcdn.com/w40/${props.country.toLowerCase()}.png`
})
</script>
```

## Documentation

You can find out more about the API and implementation in the
[base-vue-phone-input documentation](https://www.npmjs.com/package/base-vue-phone-input?activeTab=readme).
