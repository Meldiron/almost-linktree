<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	function getClasses(type: string) {
		return type === 'green'
			? 'bg-green-500 text-white'
			: type === 'red'
			? 'bg-red-500 text-white'
			: type === 'pink'
			? 'bg-pink-500 text-white'
			: type === 'blue'
			? 'bg-blue-500 text-white'
			: type === 'black'
			? 'bg-black text-white'
			: type === 'white'
			? 'bg-white text-black'
			: '';
	}
</script>

<div class="bg-white p-3 py-12 rounded-b-xl">
	<div class="max-w-lg mx-auto">
		<h1 class="text-gray-700 font-bold text-3xl text-center">{data.profile.name}</h1>
		<p class="mt-4 text-gray-500 text-center">
			{data.profile.bio}
		</p>
	</div>
</div>

<div class="max-w-lg p-3 mx-auto flex flex-col space-y-6 mt-6">
	{#each data.links.documents as link}
		<a href={link.url} rel="noreferrer">
			<button
				style={`${getClasses(link.type) === '' ? link.type : ''}`}
				class={`${getClasses(link.type)} w-full p-4 rounded-xl shadow-sm`}>{link.text}</button
			>
		</a>
	{/each}

	<div
		class={`${
			data.links.documents.length <= 0 ? '' : 'border-t-2'
		} max-w-sm mx-auto mt-6 border-gray-200 pt-4`}
	>
		<p class="text-gray-400 text-sm text-center">
			You can <a class="text-black" href="/">Create your Page</a>. It's 100% free.
		</p>
	</div>
</div>
