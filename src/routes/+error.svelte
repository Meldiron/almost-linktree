<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="w-full min-h-screen bg-white dark:bg-gray-900">
	<div class="container relative flex flex-col min-h-screen px-6 py-8 mx-auto">
		<section class="flex items-center flex-1">
			<div class="flex flex-col w-full ">
				<h1 class="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
					<span
						class="text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500"
					>
						✨ Something Went
					</span>

					<span
						class="text-transparent bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500"
					>
						Wrong ✨
					</span>
				</h1>

				<p
					class="max-w-3xl mx-auto mt-12 text-lg text-center text-gray-400 dark:text-white md:text-xl"
				>
					Noone is perfect. But this app? Nowhere close!
				</p>

				<p class="max-w-3xl mx-auto mt-6 text-center text-gray-700 dark:text-white">
					This is what happened:
				</p>

				<p
					class="max-w-3xl mx-auto mt-6 text-lg text-center text-black font-bold dark:text-white md:text-xl"
				>
					{$page.status}: {$page?.error?.message || 'Unexpected error.'}
				</p>

				<p class="mt-8 text-center text-gray-700 dark:text-white">
					Don't worry, there is a way out:
				</p>

				<div class="flex w-full mt-8 justify-center">
					<a href="/">
						<button
							class="px-8 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2"
						>
							Back to Home
						</button></a
					>
				</div>
			</div>
		</section>
	</div>
</section>
