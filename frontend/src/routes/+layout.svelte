<script>
    import "../app.css"

    import { toggleMode, ModeWatcher } from "mode-watcher"
    import { Button } from "$lib/components/ui/button"
    import { Input } from "$lib/components/ui/input"
    import Sun from "lucide-svelte/icons/sun"
    import Moon from "lucide-svelte/icons/moon"

    import { watchSession } from "./stores"

</script>

<ModeWatcher />

<header class="rounded-lg flex flex-row backdrop-blur-md border-2 fixed m-3 p-2 left-0 right-0">
    <div class="basis-1/3 flex flex-row m-auto"> 
        <Input bind:value={$watchSession} id="session" placeholder="Watch Session" class="w-60"/>
    </div>
    <div class="basis-1/3 text-center m-auto">
        <h1>Title</h1>
    </div>
    <div class="basis-1/3 text-right m-auto">
        <Button on:click={toggleMode}>
            <Sun
                class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <Moon
                class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span class="sr-only">Toggle theme</span>
        </Button>
    </div>
</header>

<slot></slot>
