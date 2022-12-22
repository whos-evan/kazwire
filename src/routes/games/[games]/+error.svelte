<script>
    import { page } from '$app/stores';
</script>

<div class="flex flex-col items-center justify-center min-h-screen py-2">
    <h1>
        {$page.status} - {$page.error.message}
    </h1>
    <p>
        This page could not be found
    </p>
</div>