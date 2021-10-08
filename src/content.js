export default `
  <header>
    <h1>Leaderboard</h1>
  </header>
  <main>
    <section class="leaderboard">
      <div class="header">
        <h2>Recent scores</h2>
        <button id="refresh-btn" type="button">Refresh</button>
      </div>
      <ul id="scoreboard">
      </ul>
    </section>
    <section class="add-score">
      <div class="header">
        <h2>Add your score</h2>
      </div>
      <form action="#">
        <label>
          <span>username</span>
          <input type="text" name="name" id="name" required autocomplete="off">
        </label>
        <label>
          <span>score</span>
          <input type="number" name="score" id="score" required autocomplete="off">
        </label>
        <input type="submit" value="Submit">
      </form>
    </section>
  </main>
  `;