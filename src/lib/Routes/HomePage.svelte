<script>
    import { fade } from "svelte/transition";
</script>

<main in:fade={{ delay: 10, duration: 200 }}>
    <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
    >
        <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        />
    </div>
    <div class="mx-auto max-w-2xl py-20 sm:py-20 lg:py-20">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            <div
                class="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
                Announcing our next batches for 2023. <a
                    href="#"
                    class="font-semibold text-indigo-600"
                    ><span class="absolute inset-0" aria-hidden="true" />Read
                    more <span aria-hidden="true">&rarr;</span></a
                >
            </div>
        </div>
        <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight sm:text-6xl">
                Where coders meet mentors
            </h1>
            <p class="mt-6 text-lg leading-8">
                Embark on your coding journey with a curious mind, a determined
                spirit, and the unwavering belief that every line of code has
                the power to shape the world.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <a
                    href="#"
                    class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >Get started</a
                >
                <a href="#" class="text-sm font-semibold leading-6"
                    >Learn more <span aria-hidden="true">→</span></a
                >
            </div>
        </div>
    </div>
</main>
