<script>
	import { auth, googleProvider, user } from '../../firebase';

	let loggedIn = false;
	let localUser = null;

	auth.onAuthStateChanged(function (user) {
		if (user) {
			// User is signed in.
			loggedIn = true;
			localUser = user;
		} else {
			// No user is signed in.
			loggedIn = false;
		}
	});

	function login() {
		auth.signInWithPopup(googleProvider);
	}

	function logout() {
		auth.signOut();
		window.location.reload();
	}

	import Nav from '../../components/nav.svelte';
	import Footer from '../../components/footer.svelte';
</script>

<Nav />
<div class="text-white h-[80vh] w-full text-center">
	<h1 class="font-bold text-5xl">Login</h1>
	<p class="text-lg mb-5">Login with Google to get access to more features in the future.</p>
	{#if loggedIn}
		<p>Logged in as {localUser.email}</p>
		<button on:click={logout} class="px-4 py-2 bg-white text-secondary font-bold">Logout</button>
	{:else}
		<button on:click={login}>
			<img src="/assets/google-signin.png" alt="signin" />
		</button>
	{/if}
</div>
<Footer />
