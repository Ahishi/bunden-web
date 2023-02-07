<script lang="ts">
    import {onMount} from 'svelte'
    import {fade} from 'svelte/transition'
    import Navigation from "./Components/Navigation.svelte";
    import Overview from "./Components/Sections/Overview.svelte";
    import Resources from "./Components/Sections/Resources.svelte";
    import Clarity from "./Components/Sections/Clarity.svelte";
    import Colors from "./Components/Sections/Colors.svelte";
    import Footer from "./Components/Footer.svelte";

    let visible = false

    let y

    onMount(() => {
        visible = true
    })

</script>

<main id="main" class="transition ease-in-out delay-150">
    <header class="bg-dark h-64 flex">
        <a href="/" class="fixed top-0 ml-16 left-0 z-30">
            <img src="src/assets/icon-dark.png" alt="full-color-dark-icon"
                 class="h-[64px] py-2 -ml-2 object-contain"/>
        </a>
        <div class="w-fit mx-auto my-auto">
            <h1 class="text-5xl title-font text-text-light">Brand Resource Guidelines</h1>
            <h5 class="text-text-light text-right text-sm mt-4 font-light italic">Last Updated 6.2.2023</h5>
        </div>
        {#if y > 192}
            <div class="fixed top-0 h-[64px] w-full bg-dark z-20 border-b border-[#424242] flex"></div>
        {/if}
    </header>

    <div class="mx-auto">
        <div class="md:flex">
            <Navigation/>
            {#if visible}
                <article>
                    <section transition:fade class="mx-8 md:mx-16 xl:mx-32 2xl:mx-56 pt-16 md:py-16">
                        <div id="overview" class="-mt-32 pt-32"></div>
                        <Overview/>
                        <div id="resources" class="-mt-16 pt-16 border-b"></div>
                        <Resources/>
                        <div id="clarity" class="-mt-16 pt-16 border-b"></div>
                        <Clarity/>
                        <div id="colors" class="-mt-16 pt-16 border-b"></div>
                        <Colors/>
                    </section>
                    <Footer/>
                </article>
            {/if}
        </div>
    </div>

</main>

<svelte:window bind:scrollY={y}/>