<script setup lang="ts">
useServerSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://image.stheadline.com/f/1296p810/0x0/100/hd/7f6d71fde631cb3856ac84e4ee6b5b4c/stheadline/inewsmedia/20211015/_2021101516490111549.jpg',
  twitterCard: 'summary_large_image'
});
definePageMeta({
  layout: false
});
// i18n-t 參考 https://vue-i18n.intlify.dev/api/component.html
</script>
<template>
  <div>
    No Layout.
    <hr>
    <i18n-t keypath="seeMoreOn">
      <template #newline>
        <br>
      </template>
      <template #free7days>
        <span class="text-primary">
          {{ $t('free7Days') }}
        </span>
      </template>
    </i18n-t>
  </div>
</template>
