<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import Polls from "./components/Polls.svelte";

  // tabs
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";

  let polls = [
    {
      id: 1,
      question: "Python or JavaScript?",
      answerA: "Python",
      answerB: "Javascript",
      votesA: 9,
      votesB: 13
    }
  ];

  const handleTabChange = e => {
    activeItem = e.detail;
  };

  const handleAdd = e => {
    const poll = e.detail;
    polls = [...polls, poll];
    activeItem = "Current Polls";
    console.log("TEST", polls);
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
    <Polls {polls} on:vote={handleVote} />
  {:else if activeItem === 'Add New Poll'}
    <CreatePollForm on:addPoll={handleAdd} />
  {/if}
</main>
<Footer />
