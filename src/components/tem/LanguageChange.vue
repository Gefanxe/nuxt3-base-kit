<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOptions
} from '@headlessui/vue';
import { LocaleObject } from 'vue-i18n-routing';

const { locale, locales } = useI18n();

const availableLocales = computed(() => {
  return (locales.value as LocaleObject[]).filter(function (loc: LocaleObject) {
    return loc.code !== locale.value;
  });
});
const switchLocalePath = useSwitchLocalePath();

const local = computed(() => {
  return locale.value;
});
</script>

<template>
  <div>
    <Listbox
      v-model="local"
      as="div"
      class="relative flex items-center"
    >
      <ListboxLabel class="sr-only">
        Change Language
      </ListboxLabel>
      <ListboxButton type="button" title="Change Language">
        <div
          class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"
        >
          <UnoIcon class="i-ph-translate-bold text-lg dark:text-white" />
        </div>
      </ListboxButton>
      <ListboxOptions
        class="absolute top-full right-0 z-[999] mt-2 w-40 overflow-hidden rounded-lg bg-white text-sm font-semibold text-gray-700 shadow-lg shadow-gray-300 outline-none dark:bg-gray-800 dark:text-white dark:shadow-gray-500 dark:ring-0"
      >
        <NuxtLink
          v-for="lang in availableLocales"
          :key="lang.iso"
          :to="switchLocalePath(lang.code)"
          class="flex w-full cursor-pointer items-center justify-between py-2 px-3"
          :class="{
            'text-white-500 bg-gray-200 dark:bg-gray-500/50':
              local === lang.code,
            'hover:bg-gray-200 dark:hover:bg-gray-700/30':
              local !== lang.code,
          }"
        >
          <span class="truncate">
            {{ lang.name }}
          </span>
          <span class="flex items-center justify-center text-sm">
            <UnoIcon :class="lang.flag" class="text-base" />
          </span>
        </NuxtLink>
      </ListboxOptions>
    </Listbox>
  </div>
</template>
