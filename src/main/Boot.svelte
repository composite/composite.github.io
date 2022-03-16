<div class="loading-container">
  <div class="loading"></div>
</div>
<style>
  :global(#app) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  .loading-container {
    flex: 0 1 25%;
  }

  .loading {

    width: 10rem;
    height: 1rem;
  }

  .loading:before {
    display: block;
    width: 100%;
    height: 100%;
    content: ' ';
    background: linear-gradient(90deg, rgba(0,0,0,0) -1%, rgba(0,255,0,1) -1%, rgba(0,255,0,1) 2%, rgba(0,0,0,0) 2%, rgba(0,0,0,0) 3%, rgba(0,255,0,1) 3%, rgba(0,255,0,1) 6%, rgba(0,0,0,0) 6%);
  }

  .loading:after {
    display: block;
    width: 100%;
    height: 100%;
    content: ' ';
    position: relative;
    top: 0; bottom: 0; left: 0; right: 0;
    border-radius: .5rem;
    border: .1rem solid white;
  }
</style>
