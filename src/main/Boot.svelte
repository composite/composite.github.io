<div class="logo-container"></div>
<div class="loading-container">
  <div class="loading"></div>
</div>
<div class="text-container">&copy; Ukjin "Composite" Yang</div>
<div class="text-container text-right">comne.kr</div>
<style>
  :global(#app) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-end;
  }

  .logo-container {
    flex: 1 1 100%;
  }
  .loading-container {
    flex: 0 1 100%;
    padding-bottom:10vh;
  }
  .text-container {
    flex: 0 1 50%;
    padding: 2rem;
    color:white;
  }

  .loading {
    margin: 0 auto;
    width: 10rem;
    height: 1rem;
    border-radius: .25rem;
    border: .1rem solid white;
    background-image:
      linear-gradient(180deg, rgba(72, 72, 72, 1) 0%, rgba(72, 72, 72, 1) 10%, rgba(192, 192, 192, 1) 40%, rgba(72, 72, 72, 1) 50%, rgba(72, 72, 72, 1) 100%),
      linear-gradient(180deg, rgba(72, 72, 72, 1) 0%, rgba(72, 72, 72, 1) 10%, rgba(192, 192, 192, 1) 40%, rgba(72, 72, 72, 1) 70%, rgba(72, 72, 72, 1) 100%),
      linear-gradient(180deg, rgba(72, 72, 72, 1) 0%, rgba(72, 72, 72, 1) 10%, rgba(192, 192, 192, 1) 40%, rgba(72, 72, 72, 1) 90%, rgba(72, 72, 72, 1) 100%);
    background-size: 6% 80%, 6% 80%, 6% 80%;
    background-position: 10% 50%, 18% 50%, 26% 50%;
    background-repeat: no-repeat,no-repeat,no-repeat;
  }
</style>
