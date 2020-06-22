<script>
  import PollDetails from "./PollDetails.svelte";
  import PollStore from "../stores/PollStore.js";

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

<div class="poll-list">
  <!-- $PollStore subscribes directly to data -->
  {#each $PollStore as poll (poll.id)}
    <PollDetails {poll} />
  {/each}
</div>
