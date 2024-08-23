<template>
    <section
        id="variants"
        className="w-full max-w-5xl py-8">
        <h2
            className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Variants
        </h2>
        <div className="w-full">
            <div className="w-full">
                <h3
                    className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight mb-4">
                    Setting default country
                </h3>
                <CodeBlock code='<MyPhoneInput countryCode="FR" />' />
                <div
                    className="preview relative mt-4 flex min-h-[200px] w-full items-center justify-center rounded-md border p-10 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <MyPhoneInput countryCode="FR" />
                </div>
            </div>
            <div className="w-full">
                <h3
                    className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight mb-4">
                    Internationalization
                </h3>
                <CodeBlock code='<MyPhoneInput countryLocale="ru-RU" />' />
                <div
                    className="preview relative mt-4 flex min-h-[200px] w-full items-center justify-center rounded-md border p-10 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <MyPhoneInput countryLocale="ru-RU" />
                </div>
            </div>
        </div>
    </section>
</template>
