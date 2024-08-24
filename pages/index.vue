<template>
    <div>
        <div class="container flex max-w-5xl justify-between py-40">
            <ModeToggle />
            <main
                class="flex min-h-screen w-full flex-col items-center justify-between scroll-smooth">
                <Hero />
                <Setup />
                <Variants />
            </main>
            <aside class="ml-20 hidden text-sm xl:block">
                <div class="sticky top-10 text-sm">
                    <h3 class="mb-6 whitespace-nowrap font-medium">
                        On this page
                    </h3>
                    <ul class="flex flex-col gap-2">
                        <li>
                            <a
                                href="#setup"
                                class="font-light text-muted-foreground">
                                Setup
                            </a>
                        </li>
                        <li>
                            <a
                                href="#variants"
                                class="font-light text-muted-foreground">
                                Variants
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
        <footer class="border-t py-6 md:px-8 md:py-0">
            <div
                class="container flex max-w-5xl flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p
                    class="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by
                    <a
                        href="https://www.linkedin.com/in/владислав-сидорик-93730b255"
                        target="_blank"
                        rel="noreferrer"
                        class="font-medium underline underline-offset-4">
                        Sidoryk Vladislav.
                    </a>
                    Deeply inspired by Omers Alpi
                    <a
                        href="https://shadcn-phone-input.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        class="font-medium underline underline-offset-4">
                        Shadcn Phone Input
                    </a>
                </p>
            </div>
        </footer>
    </div>
</template>

<script lang="ts" setup>
const phoneNumber = ref('')
const results = ref()
</script>

<style></style>
