<script>
	import { auth, googleProvider, user } from '$lib/firebase';

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

	import Nav from '$lib/components/nav.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<Nav />
<div class="text-white h-[80vh] w-full text-center">
	<div style="background-color: #0875BB; padding: 7px 7px 7px 7px;" class="rounded-lg mx-20 drop-shadow-md">
	<h1 class="font-bold text-5xl">Login</h1>
	<p class="text-lg mb-5">The login system is still being worked on. Login with Google now to get access to more features in the future!</p>
	{#if loggedIn}
		<p>Logged in as {localUser.email}</p>
		<button on:click={logout} class="px-4 py-2 bg-white text-secondary font-bold rounded-lg hover:opacity-70 duration-300">Logout</button>
	{:else}
		<button on:click={login}>
			<img src="/assets/google-signin.png" alt="signin" class="hover:opacity-70 duration-300"/>
		</button>
	{/if}
</div>
</div>
<Footer />
