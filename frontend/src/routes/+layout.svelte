<script>
    import "../app.css"

    import { toggleMode, ModeWatcher } from "mode-watcher"
    import { Button } from "$lib/components/ui/button"
</script>

<ModeWatcher />
<Button on:click={toggleMode}>D</Button>

<slot></slot>
