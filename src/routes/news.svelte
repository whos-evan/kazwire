<script>
    import newsJson from './news.json';
    let news = newsJson['news']; 
</script>

<div class="text-white w-full pl-10 pr-10 text-center ">
    <h1 class="text-4xl font-bold mb-5">News</h1>
    <p class="text-xl">{news}</p>
</div>