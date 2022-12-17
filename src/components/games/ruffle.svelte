<script>
    window.RufflePlayer = window.RufflePlayer || {};
    window.addEventListener('load', (event) => {
        const ruffle = window.RufflePlayer.newest();
        const player = ruffle.createPlayer();
        player.style.width = '98vw';
        player.style.height = '97vh';
        player.style.margin = '0 auto';
        const container = document.getElementById('container');
        container.appendChild(player);
        player.load('ruffle-template.swf');
    });
</script>
<div id="container" class="w-full h-[1000px]"></div>