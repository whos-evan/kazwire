<script>
    import Nav from '../../components/nav.svelte';
    import Footer from '../../components/footer.svelte';

    function changeTitle() {
        document.title = document.getElementById('title').value;
        localStorage.setItem('title', document.getElementById('title').value);
        }
</script>

<Nav />
<div class="h-[75vh] w-full mt-10 text-center text-white">
    <h1 class="text-3xl">Settings</h1>
    <div class="grid grid-cols-1 gap-10 mt-5">
        <div class="row-start-1 col-start-1">
            Tab Cloak: 
            <input id="title" type="text" class="text-black rounded-lg p-2" placeholder="Enter title here..." />
            <button class="bg-white text-black py-2 px-4 rounded-lg" on:click={changeTitle}>
                Save
            </button>
        </div>
    </div>

    
</div>
<Footer />