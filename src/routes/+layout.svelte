<script lang="ts">
  import "../app.pcss";
  
  import { ModeWatcher } from "mode-watcher";
</script>

<ModeWatcher />

<div class="container">
  <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    Layout
  </h1>
  <p class="text-xl text-muted-foreground">
    Common UI element between pages
  </p>
</div>

<slot></slot>