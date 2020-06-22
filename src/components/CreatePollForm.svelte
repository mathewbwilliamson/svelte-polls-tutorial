<script>
  import PollStore from "../stores/PollStore";
  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";

  let dispatch = createEventDispatcher();
  let fields = { question: "", answerA: "", answerB: "" };
  let errors = { question: "", answerA: "", answerB: "" };
  let valid = false;

  const submitHandler = () => {
    valid = true;
    console.log(fields);
    if (fields.question.trim().length < 5) {
      valid: false;
      errors.question = "Question must be at least 5 characters long";
    } else {
      errors.question = "";
    }

    if (fields.answerA.trim().length < 2) {
      valid: false;
      errors.answerA = "Answer A must be at least 1 character long";
    } else {
      errors.answerA = "";
    }

    if (fields.answerB.trim().length < 2) {
      valid: false;
      errors.answerB = "Answer B must be at least 1 character long";
    } else {
      errors.answerB = "";
    }

    // add new poll
    if (valid) {
      let poll = { ...fields, votesA: 0, votesB: 0, id: Math.random() };
      // Save poll to store

      PollStore.update(currentPolls => {
        return [...currentPolls, poll];
      });
      dispatch("addPoll");
    }
  };
</script>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: right;
  }

  .form-field {
    margin: 18px auto;
  }

  input {
    width: 100%;
    border-radius: 6px;
  }

  label {
    margin: 10px auto;
    text-align: left;
  }

  .error {
    color: #d91b42;
    font-size: 12px;
    font-weight: bold;
  }
</style>

<form on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll Question:</label>
    <input type="text" id="question" bind:value={fields.question} />
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
    <div class="error">{errors.answerB}</div>
  </div>
  <Button>Add Poll</Button>
</form>
