<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1 class="text-black font-bold text-2xl">Links</h1>
<p class="text-gray-600">URLs in your Linktree.</p>

<div class="my-4 grid grid-cols-12 gap-4">
	{#each data.links.documents as link}
		<a
			href={`/app/links/${link.$id}`}
			class="group col-span-12 lg:col-span-6 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
		>
			<div class="mt-2">
				<h3 class="group-hover:underline text-2xl font-bold text-gray-700 dark:text-white">
					{link.text} <span class="text-sm text-gray-500">({link.type})</span>
				</h3>
				<p class="mt-2 text-gray-600 dark:text-gray-300">{link.url}</p>
			</div>
		</a>
	{/each}

	<a
		href="/app/links/new"
		class="group col-span-12 lg:col-span-6 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 flex items-center justify-center"
	>
		<h3
			class="group-hover:underline text-center text-2xl font-bold text-blue-500 dark:text-blue-200"
		>
			Add New
		</h3>
	</a>
</div>
