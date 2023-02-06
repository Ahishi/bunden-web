<script>
    export let resource
    let dropdown = false

    function clickOutside(node) {
        const handleClick = (event) => {
            if (!node.contains(event.target)) {
                node.dispatchEvent(new CustomEvent("outclick"));
            }
        };

        document.addEventListener("click", handleClick, true);

        return {
            destroy() {
                document.removeEventListener("click", handleClick, true);
            },
        };
    }

</script>

<div class="relative">
    {#if !dropdown}
        <button on:click={() => dropdown = true} class="underline italic cursor-pointer">download</button>
    {:else}
        <div use:clickOutside on:outclick={() => dropdown = false} class="flex flex-col rounded-xl border border-gray-300 absolute right-0 bg-white z-20">
            <button class="px-16 py-4 border-b border-gray-300 hover:bg-gray-200 transition rounded-t-xl">Vector (.SVG)</button>
            <button class="px-16 py-4 border-b border-gray-300 hover:bg-gray-200 transition rounded-t-xl">2048x (.PNG)</button>
            <button class="px-16 py-4 border-b border-gray-300 hover:bg-gray-200 transition">1024x (.PNG)</button>
            <button class="px-16 py-4 border-b border-gray-300 hover:bg-gray-200 transition">512x (.PNG)</button>
            <button class="px-16 py-4 border-b border-gray-300 hover:bg-gray-200 transition">64x (.PNG)</button>
            <button class="px-16 py-4 hover:bg-gray-200 transition rounded-b-xl">16x (.PNG)</button>
        </div>
    {/if}
</div>