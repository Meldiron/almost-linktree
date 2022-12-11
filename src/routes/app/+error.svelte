<script lang="ts">
	import { page } from '$app/stores';
</script>

<p>
	Whoops 🤦 {$page.status}: {$page?.error?.message || 'Unexpected error.'}
</p>
