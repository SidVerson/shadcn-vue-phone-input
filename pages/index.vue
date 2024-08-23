<template>
    <div>
        <client-only>
            <PhoneInput
                class="flex"
                country-locale="en-EN"
                :ignored-countries="['AC']"
                v-model="phoneNumber"
                @update="results = $event">
                <template
                    #selector="{ inputValue, updateInputValue, countries }">
                    <Popover>
                        <PopoverTrigger>
                            <Button
                                variant="outline"
                                class="flex gap-1 rounded-e-none rounded-s-lg px-3">
                                <FlagComponent :country="inputValue" />
                                <ChevronsUpDown
                                    class="-mr-2 h-4 w-4 opacity-50" />
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
                                                updateInputValue(option.iso2)
                                            ">
                                            <FlagComponent
                                                :country="option?.iso2" />
                                            <span class="flex-1 text-sm">{{
                                                option.name
                                            }}</span>
                                            <span
                                                class="text-foreground/50 text-sm"
                                                >{{ option.dialCode }}</span
                                            >
                                        </CommandItem>
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </template>

                <template
                    #input="{ inputValue, updateInputValue, placeholder }">
                    <Input
                        class="rounded-e-lg rounded-s-none"
                        type="text"
                        :model-value="inputValue"
                        @input="updateInputValue"
                        :placeholder="placeholder" />
                </template>
            </PhoneInput>

            {{ phoneNumber }}
        </client-only>
    </div>
</template>

<script lang="ts" setup>
import PhoneInput from 'base-vue-phone-input'
import { ChevronsUpDown } from 'lucide-vue-next'
const phoneNumber = ref('')
const results = ref()
</script>

<style></style>
