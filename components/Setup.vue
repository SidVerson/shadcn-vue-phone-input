<template>
    <section
        id="setup"
        class="w-full max-w-5xl py-8">
        <h2
            class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Setup
        </h2>
        <div class="w-full">
            <h3
                class="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight">
                Install necessary Shadcn components:
            </h3>
            <p
                class="[&amp;:not(:first-child)]:mt-6 text-normal leading-7 mb-2">
                Run the{{ ' ' }}
                <code
                    class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                    shadcn-ui</code
                >{{ ' ' }} add command to add the necessary shadcn components to
                your project:
            </p>
            <div data-rehype-pretty-code-fragment="">
                <CodeBlock
                    class="mt-2"
                    :code="`npx shadcn-vue@latest add popover\nnpx shadcn-vue@latest add command\nnpx shadcn-vue@latest add button\nnpx shadcn-vue@latest add input`" />
            </div>
        </div>
        <div class="w-full">
            <h3
                class="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight mb-2">
                Install necessary Base Vue Phone Number package:
            </h3>
            <CodeBlock
                code="npm install base-vue-phone-input"
                class="mt-2" />
        </div>
        <div class="w-full">
            <h3
                class="font-heading mt-8 scroll-m-20 pb-2 text-lg font-semibold tracking-tight">
                To use the phone input component:
            </h3>
            <div class="mt-10 flex flex-col">
                <h3
                    class="font-heading mt-12 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">
                    Snippets
                </h3>
                <Accordion
                    default-value="item-1"
                    type="single"
                    collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>SPhoneInput.vue</AccordionTrigger>
                        <AccordionContent key="item-1">
                            <CodeBlock :code="PhoneInputSnippet" />
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>FlagComponent.vue</AccordionTrigger>
                        <AccordionContent key="item-2">
                            <CodeBlock :code="FlagComponentSnippet" />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    </section>
</template>

<script setup>
import {
    PhoneInputSnippet,
    FlagComponentSnippet,
} from '../content/snippets/phone-input'
</script>
