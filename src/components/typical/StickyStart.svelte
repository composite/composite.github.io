<style>
.sticky-container {
  min-height: 200vh;
  height: calc(100vh + var(--content-height));
}
.sticky-container > div {
  @apply sticky top-0;
}
</style>
<script lang="ts">

  let contentHeight = '0'

  const stickAction = (node: HTMLDivElement) => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        contentHeight = entry.contentRect.height + 'px'
      }
    })
    console.log('asd')
    const { height } = node.getBoundingClientRect()
    contentHeight = height + 'px'
    observer.observe(node)
    return {
      destroy() {
        observer.unobserve(node)
        observer.disconnect()
      }
    }
  }
</script>

<div class="sticky-container" style="--content-height: {contentHeight}">
  <div use:stickAction {...$$restProps}><slot /></div>
</div>
