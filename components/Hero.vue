<template>
    <section
        class="z-10 flex w-full max-w-5xl flex-col items-center gap-5 text-center">
        <div
            class="z-10 flex w-full flex-col items-center gap-5 text-center">
            <h1 class="scroll-m-20 text-4xl font-bold tracking-tight">
                Shadcn Vue Phone Input
            </h1>
            <p class="max-w-[450px] text-muted-foreground">
                An implementation of a Phone Input component built on top of
                Shadcn UI&apos;s input component.
            </p>
            <div class="mt-1 flex gap-2">
                <Button
                    as-child
                    size="lg"
                    class="min-w-[150px] shadow-sm">
                    <a href="#setup"> Try it out </a>
                </Button>
                <Button
                    as-child
                    size="lg"
                    variant="secondary">
                    <a
                        href="https://github.com/SidVerson/shadcn-vue-phone-input.git">
                        Github
                    </a>
                </Button>
            </div>
        </div>

        <div
            id="try"
            class="w-full py-8">
            <div
                class="relative my-4 flex w-full flex-col space-y-2 justify-center">
                <div
                    class="preview relative mt-2 flex min-h-[350px] w-full items-center justify-center rounded-md border p-10 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <form
                        @submit="onSubmit"
                        class="flex flex-col items-start space-y-8 justify-center">
                        <FormField
                            v-slot="{ handleChange, handleBlur }"
                            name="phone">
                            <FormItem class="flex flex-col items-start">
                                <FormLabel class="text-left"
                                    >Phone Number</FormLabel
                                >
                                <FormControl class="w-full">
                                    <MyPhoneInput
                                        v-model="phoneNumber"
                                        @update="handleChange" />
                                </FormControl>
                                <FormDescription class="text-left">
                                    Enter a phone number
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                        <Button type="submit"> Submit </Button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useForm } from 'vee-validate'
import { toast } from 'vue-sonner'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
const phoneNumber = ref('')
const formSchema = toTypedSchema(
    z.object({
        phone: z.object({
            countryCode: z.string(),
            isValid: z.boolean(),
            isPossible: z.boolean(),
            countryCallingCode: z.string(),
            nationalNumber: z.string(),
            formatInternational: z.string(),
            formatNational: z.string(),
            uri: z.string(),
            e164: z.string(),
            rfc3966: z.string(),
        }),
    })
)

const form = useForm({
    validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
    toast.message('You submitted the following values:', {
        description: `${JSON.stringify(values.phone, null, 3)}`,
    })
})
</script>
