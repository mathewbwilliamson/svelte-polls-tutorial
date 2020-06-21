<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const handleTabChange = e => {
    activeItem = e.detail;
  };
</script>

<style>
  main {
    width: 80vw;
    margin: auto auto;
  }
</style>

<Header />
<main>
  <Tabs {items} {activeItem} on:tabChange={handleTabChange} />
  {#if activeItem === 'Current Polls'}
    <p>Poll List</p>
  {:else if activeItem === 'Add New Poll'}
    <p>New poll form component goes here</p>
  {/if}
</main>
<Footer />
