<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Polls from "./components/Polls.svelte";

  // Tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  const handleTabChange = e => {
    activeItem = e.detail;
  };

  const handleAdd = () => {
    activeItem = "Current Polls";
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
    <Polls />
  {:else if activeItem === 'Add New Poll'}
    <CreatePollForm on:addPoll={handleAdd} />
  {/if}
</main>
<Footer />
