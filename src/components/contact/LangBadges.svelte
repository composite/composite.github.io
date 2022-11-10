<style>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.slider {
  height: 64px;
  margin: auto;
  overflow: hidden;
  position: relative;
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  animation: scroll 90s linear infinite;
  display: flex;
  align-items: center;
  width: calc(100px * 116);
}
.slider .slide-track.reverse {
  animation-direction: reverse;
}
.slider .slide {
  height: 100px;
  width: 100px;
  text-align: center;
}
.slider .slide img {
  width: 64px;
}
</style>
<script lang="ts">
import { experienceImages } from "~/store/langimg";

export let reverse = false
export let inverse = false

$: expImages = inverse ? Object.entries(experienceImages).reverse() : Object.entries(experienceImages)
</script>

<div class="slider">
  <div class="slide-track" class:reverse="{reverse}">
    {#each expImages as [alt, img]}
    <div class="slide">
      <img src="{img}" alt="{alt}" />
    </div>
    {/each}
    {#each expImages as [alt, img]}
    <div class="slide">
      <img src="{img}" alt="{alt}" />
    </div>
    {/each}
  </div>
</div>
