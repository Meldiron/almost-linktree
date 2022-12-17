<script lang="ts">
	import type { ActionData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
</script>

<hr class="mt-3">

<p class="mt-3 text-sm font-light text-center text-gray-400">
	Sign in to create your own page. 100% free!
</p>

<form class="mt-6" use:enhance method="POST">
	<div>
		<label for="email" class="block text-sm text-gray-800 dark:text-gray-200">E-mail:</label>
		<input
			required={true}
			type="text"
			name="email"
			class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
		/>
	</div>

	<div class="mt-6">
		<button
			type="submit"
			class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
		>
			Continue
		</button>
	</div>

	{#if form?.success === false}<p class="text-red-500 text-center mt-4">{form?.message}</p>{/if}
	{#if form?.success === true}<p class="text-green-500 text-center mt-4">
			Login e-mail sent. Please check your inbox.
		</p>{/if}
</form>
