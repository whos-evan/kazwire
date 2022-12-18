<script>
    import { onMount } from 'svelte';
    onMount(() => {
        (adsbygoogle = window.adsbygoogle || []).push({});
        setTimeout(() => {
                // We are targeting the first banner ad of AdSense
                var ad = document.querySelector("ins.adsbygoogle"); 
                // If the ad contains no innerHTML, ad blockers are at work
                // if its unfilled then don't show anything
                
                if (ad && ad.innerHTML.replace(/\s/g, "").length == 0) { 
                    document.getElementById('GoogleAds').style.cssText = 'display: hidden;';
                }
            }, 3000);
    });

    
</script>

<div class="Vert w-full align-center lg:block sm:hidden">
    <div id="GoogleAds" align="center" class="w-full h-full">
        <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-7648886706850999"
        data-ad-slot="8673868840"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </div>

</div>