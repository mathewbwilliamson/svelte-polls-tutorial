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

  const handleAdd = e => {
    const poll = e.detail;
    polls = [...polls, poll];
    activeItem = "Current Polls";
  };

  const handleVote = e => {
    const { id, option } = e.detail;
    let copiedPolls = [...polls];
    let upvotedPoll = copiedPolls.find(poll => poll.id === id);

    if (option === "a") {
      upvotedPoll.votesA++;
    } else if (option === "b") {
      upvotedPoll.votesB++;
    }

    polls = copiedPolls;
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
    <Polls on:vote={handleVote} />
  {:else if activeItem === 'Add New Poll'}
    <CreatePollForm on:addPoll={handleAdd} />
  {/if}
</main>
<Footer />
