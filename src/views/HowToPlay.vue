<template>
  <div class="howToPlay">
    <div class="section">
      <h1>Object of the Game</h1>
      <p>Guess which ancestor your opponent selected before your opponent guesses which ancestor you selected.</p>
    </div>
    <div class="section">
      <h1>Game Play</h1>
      <p>Alternate turns asking one question. The youngest player goes first.</p>
      <p>On your turn, ask a question that can be answered with a "yes" or "no".</p>
      <p>For example: "Was your Mystery Ancestor born in the 1900's?"</p>
      <p>If the answer is "yes", then you know that all of the ancestors not born in the 1900's can be eliminated from your board.</p>
      <p>If the answer is "no", then all of the ancestors born in the 1900's can be eliminated from your board.</p>
      <p>To eliminate an ancestor from the board, simply click on their card, and it will flip over.</p>
      <p>Keep taking turns asking questions until someone thinks they can guess which ancestor their opponent selected.</p>
    </div>
    <div class="section">
      <h1>Guessing the Ancestor</h1>
      <p>When you are ready to guess who is the Mystery Ancestor, make your guess on your turn instead of asking a question. You cannot ask a question and guess on the same turn.</p>
      <p>If you guess wrong, you lose the game!</p>
      <p>If you guess right, you win the game!</p>
    </div>
  </div>
</template>

<style scoped>
  .section {
    border-style: solid;
    border-color: #78b7fa;
    border-radius: 4px;
    padding: 12px;
    margin: 8px;
  }

  p {
    font-size: 20px;
  }
</style>
