<script>
	import { auth, googleProvider } from '../../firebase';
	import { authState } from 'rxfire/auth';

	let user;

	const unsubscribe = authState(auth).subscribe((usr) => (user = usr));

	function login() {
		auth.signInWithPopup(googleProvider);
	}

	function logout() {
		auth.signOut();
	}

	import Nav from '../../components/nav.svelte';
	import Footer from '../../components/footer.svelte';
</script>

<Nav />
<div class="text-white h-[80vh] w-full text-center">
	<h1 class="font-bold text-5xl">Login</h1>
	<p class="text-lg mb-5">Login with Google to get access to more features in the future.</p>
	{#if user}
		Logged in as {user.email}
		<br>
		<button on:click={logout} class="px-4 py-2 bg-white text-secondary font-bold">Logout</button>
	{:else}
		<button on:click={login}>
			<img src="/assets/google-signin.png" alt="signin">
		</button>
	{/if}
</div>
<Footer />
