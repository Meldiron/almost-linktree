<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { enhance } from '$app/forms';

	export let form: ActionData;
	export let data: PageData;
</script>

<h1 class="text-black font-bold text-2xl">Settings</h1>
<p class="text-gray-600">Profile page configuration.</p>

<div class="my-4 grid grid-cols-12 gap-4">
	<div class="col-span-12 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
		<div class="mt-2">
			<h3 class="text-2xl font-bold text-gray-700 dark:text-white">Basic Information</h3>
			<p class="mt-2 text-gray-600 dark:text-gray-300">
				Settings of personal info on your Linktree.
			</p>

			<form 	use:enhance={() => {
                return async ({update}) => {
                    await update({ reset: false });
                };
            }} method="POST" class="flex flex-col space-y-3  mt-8 max-w-lg">
				<div>
					<label class="text-gray-700 dark:text-gray-200" for="username">Page URL:</label>
					<div class="mt-1">
						<span class="text-gray-500">https://linktree.almostapps.eu/u/</span>
						<input
							value={data.profile?.slug ?? ''}
							name="slug"
							type="text"
							required={true}
							class="mt-1 w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
						/>
					</div>
				</div>
				<div>
					<label class="text-gray-700 dark:text-gray-200" for="username">Name:</label>
					<input
						value={data.profile?.name ?? ''}
						name="name"
						type="text"
						required={true}
						class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					/>
				</div>
				<div>
					<label class="text-gray-700 dark:text-gray-200" for="username">Short Bio:</label>
					<textarea
						value={data.profile?.bio ?? ''}
						name="bio"
						required={true}
						type="text"
						rows="2"
						class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					/>
				</div>

				<div>
					<input type="hidden" name="profileId" value={data.profile?.$id ?? ''} />
					<input type="hidden" name="userId" value={data.account.$id} />
					<button
						type="submit"
						class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
						>Save</button
					>
				</div>

				{#if form?.success === false}<p class="text-red-500 mt-4">
						{form?.message}
					</p>{/if}
				{#if form?.success === true}<p class="text-green-500 mt-4">
						Profile successfully updated.
					</p>{/if}
			</form>
		</div>
	</div>
</div>
