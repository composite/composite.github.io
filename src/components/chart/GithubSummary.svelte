<style>
  section.grid {
    @apply bg-no-repeat;
    gap: 2px;
    background-image: radial-gradient(grey 0%, transparent 25%);
    background-position: center;
  }
  section.grid > article {
    @apply flex flex-col justify-center items-center bg-white;
    aspect-ratio: 1 / 1;
  }
  section.grid > article > h6 {
    font-size: 2.2vw;
  }
  section.grid > article > p {
    font-size: 2vw;
  }
</style>

<script lang="ts">
  import { github } from '~/store/github'
</script>

<section class="grid grid-cols-2 rounded-xl p-1 shadow-xl">
  <article>
    <h6>총 저장소</h6>
    <p>{$github.repos ?? 0}</p>
  </article>
  <article>
    <h6>올해 푸시</h6>
    <p>{$github.pushes ?? 0}</p>
  </article>
  <article>
    <h6>스타 개수</h6>
    <p>{$github.stars ?? 0}</p>
  </article>
  <article>
    <h6>공개 이슈</h6>
    <p>{$github.issues ?? 0}</p>
  </article>
</section>
