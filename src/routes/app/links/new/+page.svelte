<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
	export let data: PageData;
</script>

<h1 class="text-black font-bold text-2xl">Links</h1>
<p class="text-gray-600">URLs in your Linktree.</p>

<div class="my-4 grid grid-cols-12 gap-4">
	<div class="col-span-12 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
		<div class="mt-2">
			<h3 class="text-2xl font-bold text-gray-700 dark:text-white">New Link</h3>
			<p class="mt-2 text-gray-600 dark:text-gray-300">Add a new URL to your Linktree.</p>

			<form
				use:enhance={() => {
					return async ({ update }) => {
						await update({ reset: false });
					};
				}}
				method="POST"
				class="flex flex-col space-y-3  mt-8 max-w-lg"
			>
				<div>
					<label class="text-gray-700 dark:text-gray-200" for="username">Buttton Text:</label>
					<input
						name="text"
						type="text"
						required={true}
						class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					/>
				</div>

				<div>
					<label class="text-gray-700 dark:text-gray-200" for="username">Link URL:</label>
					<input
						name="url"
						type="text"
						required={true}
						class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					/>
				</div>

				<div>
					<label class="text-gray-700 dark:text-gray-200" for="username">Type:</label>
					<select
						name="type"
						required={true}
						class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					>
						<option selected={true} value="black">Black</option>
						<option value="white">White</option>
						<option value="red">Red</option>
						<option value="green">Green</option>
						<option value="blue">Blue</option>
						<option value="pink">Pink</option>
					</select>
				</div>

				<div>
					<input type="hidden" name="profileId" value={data.profile?.$id ?? ''} />
					<button
						type="submit"
						class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
						>Create</button
					>
				</div>

				{#if form?.success === false}<p class="text-red-500 mt-4">
						{form?.message}
					</p>{/if}
			</form>
		</div>
	</div>
</div>
