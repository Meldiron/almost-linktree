<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1 class="text-black font-bold text-2xl">Settings</h1>
<p class="text-gray-600">Profile page configuration.</p>

<div class="my-4 grid grid-cols-12 gap-4">
	<div class="col-span-12 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
		<div class="mt-2">
			<h3 class="text-2xl font-bold text-gray-700 dark:text-white">Something Went Wrong 🤦</h3>
			<p class="mt-2 text-gray-600 dark:text-gray-300">
				{$page.status}: {$page?.error?.message || 'Unexpected error.'}
			</p>
		</div>
	</div>
</div>
