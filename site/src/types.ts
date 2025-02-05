import type { ViteSSGContext } from "vite-ssg";
import { PAPER } from "~/utils";

export type UserModule = (ctx: ViteSSGContext) => void;

export type PaperType = keyof typeof PAPER;

export type ResumeStyles = {
  marginV: number;
  marginH: number;
  lineHeight: number;
  paragraphSpace: number;
  themeColor: string;
  fontCJK: Font;
  fontEN: Font;
  fontSize: number;
  paper: PaperType;
};

export type SystemData = {
  mdContent: string;
  fileImported: boolean;
  curResumeId: string | null;
  curResumeName: string;
};

export type UIData = {
  previewScale: number;
  previewBottom: number;
  openToolbar: boolean;
};

export type ToastFlagData = {
  save: boolean;
  delete: boolean | string;
  switch: boolean | string;
  new: boolean;
  duplicate: boolean | string;
  correct: boolean | number;
};

export type ResumeHeaderItem = {
  readonly text: string;
  readonly link?: string;
  readonly newLine?: boolean;
};

export type ResumeFrontMatter = {
  readonly name?: string;
  readonly header?: Array<ResumeHeaderItem>;
};

export type Font = {
  readonly name: string;
  readonly fontFamily?: string;
};

export type ResumeStorageItem = {
  name: string;
  content: string;
  styles: ResumeStyles;
};

export type ResumeStorage = {
  [id: string]: ResumeStorageItem;
};

export type DropdownItem = {
  readonly text: string;
  readonly note?: string;
  readonly icon?: string;
  readonly link?: string;
  readonly function?: ({ text, i }: { text: string; i: number }) => void;
  readonly border?: boolean;
};
