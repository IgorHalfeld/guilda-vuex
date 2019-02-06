<template>
  <div>
    <slot :fee="fee" />
  </div>
</template>

<script>
export default {
  name: 'withFee',
  data: () => ({
    fee: 1.3,
  }),
};
</script>