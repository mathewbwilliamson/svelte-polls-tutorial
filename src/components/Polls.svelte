<script>
  import PollDetails from "./PollDetails.svelte";
  import PollStore from "../stores/PollStore.js";
  import { flip } from "svelte/animate";
  import { fade, slide, scale } from "svelte/transition";

  // const unsub = PollStore.subscribe(data => {
  //   polls = data;
  // });
  // // Lifecycle Hooks!! onMount, onDestroy, others
  // onDestroy(() => {
  //   unsub();
  // });
</script>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>

<!-- Look at transitions for options -->
<div class="poll-list">
  <!-- $PollStore subscribes directly to data -->
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <PollDetails {poll} />
    </div>
  {/each}
</div>
