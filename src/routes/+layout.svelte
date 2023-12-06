<script lang="ts">
  import "../app.pcss";
  
  import { Button } from "$lib/components/ui/button";
  import { Separator } from "$lib/components/ui/separator";
  import { Slider } from "$lib/components/ui/slider";
  import * as Table from "$lib/components/ui/table";
  import * as Tabs from "$lib/components/ui/tabs";
  
  import { Github, Youtube, Tractor, Sun, Moon } from "lucide-svelte";
  import { ModeWatcher, toggleMode } from "mode-watcher";

  import { browser, dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  inject({ mode: dev ? 'development' : 'production' });
  import { webVitals } from '$lib/vitals';
  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  import { page } from '$app/stores';
  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId
    })
  }
</script>

<ModeWatcher />

<div class="container">
  <h1 class="text-center mt-20 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
    Pro Rata Type 
    <Button on:click={toggleMode} variant="outline" size="icon">
      <Sun
        class="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        class="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span class="sr-only">Toggle theme</span>
    </Button>

    <Button variant="outline" size="icon" href="https://github.com/andriytyurnikov/proratatype">
      <Github
        class="h-4 w-4 rotate-0 scale-100 transition-all"
      />
    </Button>
    
    <Button variant="outline" size="icon" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
      <Youtube
        class="h-4 w-4 rotate-0 scale-100 transition-all"
      />
    </Button>
  </h1>

  <p class="mb-20 text-center text-xl text-muted-foreground">
    Font sizing for truly responsive proportional typography
  </p>
</div>

<slot></slot>