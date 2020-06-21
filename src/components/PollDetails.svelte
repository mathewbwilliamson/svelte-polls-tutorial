<script>
  export let poll;

  // Reactive values
  $: totalVotes = poll.votesA + poll.votesB;
</script>

<style>

</style>

<div class="poll">
  <h3>{poll.question}</h3>
  <p>Total Votes: {totalVotes}</p>
  <div class="answer">
    <div class="percent percent-a">
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
  </div>
  <div class="answer">
    <div class="percent percent-b">
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
  </div>
</div>
