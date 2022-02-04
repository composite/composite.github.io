<script lang="ts">
  export let name = 'circle'
</script>
<svg class={$$restProps.class} style={$$restProps.style}>
  <use href={`https://unpkg.com/feather-icons@4.28.0/dist/feather-sprite.svg#${name}`}/>
</svg>
<style>
  svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }
</style>
