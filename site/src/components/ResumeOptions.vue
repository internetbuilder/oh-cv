<template>
  <NavItem
    :text="data.curResumeName"
    icon="ic:outline-arrow-drop-down"
    :reverse="true"
  >
    <Dropdown w-auto pc:w-48 :items="items" />
  </NavItem>

  <SwitchResume v-if="isSwitchOpen" @close-switch="toggleSwitch(false)" />
  <RenameResume v-if="isRenameOpen" @close-rename="toggleRename(false)" />
</template>

<script lang="ts" setup>
import { isMac } from "@renovamen/utils";
import { useShortcuts } from "@renovamen/vue-shortcuts";
import {
  deleteResume,
  newResume,
  saveResume,
  duplicateResume,
  saveResumesToLocal
} from "~/utils";

const { t } = useI18n();
const { data } = useDataStore();

const items = computed(() => [
  {
    text: t("resume_opt.open"),
    icon: "material-symbols:folder-open-outline-rounded",
    function: () => toggleSwitch(true),
    note: `${isMac ? "Cmd" : "Ctrl"}+O`
  },
  {
    text: t("resume_opt.new"),
    icon: "material-symbols:note-add-outline-rounded",
    function: newResume,
    border: true
  },
  {
    text: t("resume_opt.save"),
    icon: "ic:baseline-save",
    function: saveResume,
    note: `${isMac ? "Cmd" : "Ctrl"}+S`
  },
  {
    text: t("resume_opt.saveas"),
    icon: "ic:baseline-save-as",
    function: saveResumesToLocal,
    note: `Shift+${isMac ? "Cmd" : "Ctrl"}+S`,
    border: true
  },
  {
    text: t("resume_opt.rename"),
    icon: "bx:edit",
    function: () => toggleRename(true)
  },
  {
    text: t("resume_opt.duplicate"),
    icon: "ion:duplicate",
    function: () => duplicateResume(data.curResumeId),
    border: true
  },
  {
    text: t("resume_opt.delete"),
    icon: "material-symbols:delete-outline-rounded",
    function: () => deleteResume(data.curResumeId)
  }
]);

// Toggle pane
const isSwitchOpen = ref(false);
const isRenameOpen = ref(false);

const toggleSwitch = (to?: boolean): void => {
  isSwitchOpen.value = typeof to === "boolean" ? to : !isSwitchOpen.value;
};

const toggleRename = (to?: boolean): void => {
  isRenameOpen.value = typeof to === "boolean" ? to : !isRenameOpen.value;
};

// Handle shortcuts
useShortcuts("ctrl+o", () => toggleSwitch(true));
useShortcuts("ctrl+s", saveResume);
useShortcuts("shift+ctrl+s", saveResumesToLocal);
</script>
