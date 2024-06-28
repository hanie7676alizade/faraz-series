export enum TextAlignmentEnum {
  LEFT = "text-end",
  RIGHT = "text-start",
  CENTER = "text-center",
  INHERIT = "text-inherit",
  JUSTIFY = "text-justify",
}

export enum PatternEnum {
  DATE = "date",
  NUMBER = "number",
  TEXT = "text",
}

export enum TextVariantEnum {
  HEADING_1 = "text-heading-1",
  HEADING_2 = "text-heading-2",
  HEADING_3 = "text-heading-3",
  TITLE_1 = "text-title-1",
  TITLE_2 = "text-title-2",
  TITLE_3 = "text-title-3",
  TITLE_4 = "text-title-4",
  SUBTITLE_1 = "text-subtitle-1",
  SUBTITLE_2 = "text-subtitle-2",
  BODY_1 = "text-body-1",
  BODY_2 = "text-body-2",
  BODY_3 = "text-body-3",
  BODY_4 = "text-body-4",
  BODY_5 = "text-body-5",
  BODY_6 = "text-body-6",
  CAPTION_1 = "text-caption-1",
  CAPTION_2 = "text-caption-2",
  CAPTION_3 = "text-caption-3",
  CAPTION_4 = "text-caption-4",
  CAPTION_5 = "text-caption-5",
  BUTTON_1 = "text-button-1",
  BUTTON_2 = "text-button-2",
  HYPERLINK_1 = "text-link-1",
  HYPERLINK_2 = "text-link-2",
  HYPERLINK_3 = "text-link-3",
}

export const headingVariants = [
  TextVariantEnum.HEADING_1,
  TextVariantEnum.HEADING_2,
  TextVariantEnum.HEADING_3,
  TextVariantEnum.TITLE_1,
  TextVariantEnum.TITLE_2,
  TextVariantEnum.TITLE_3,
  TextVariantEnum.TITLE_4,
  TextVariantEnum.SUBTITLE_1,
  TextVariantEnum.SUBTITLE_2,
];

export const paragraphVariants = [
  TextVariantEnum.BODY_1,
  TextVariantEnum.BODY_2,
  TextVariantEnum.BODY_3,
  TextVariantEnum.BODY_4,
  TextVariantEnum.BODY_5,
  TextVariantEnum.BODY_6,
];

export const spanVariants = [
  TextVariantEnum.CAPTION_1,
  TextVariantEnum.CAPTION_2,
  TextVariantEnum.CAPTION_3,
  TextVariantEnum.CAPTION_4,
  TextVariantEnum.CAPTION_5,
  TextVariantEnum.BUTTON_1,
  TextVariantEnum.BUTTON_2,
  TextVariantEnum.HYPERLINK_1,
  TextVariantEnum.HYPERLINK_2,
  TextVariantEnum.HYPERLINK_3,
];

export const headingElements: Record<string, string> = {
  [TextVariantEnum.HEADING_1]: "h1",
  [TextVariantEnum.HEADING_2]: "h2",
  [TextVariantEnum.HEADING_3]: "h3",
  [TextVariantEnum.TITLE_1]: "h1",
  [TextVariantEnum.TITLE_2]: "h2",
  [TextVariantEnum.TITLE_3]: "h3",
  [TextVariantEnum.TITLE_4]: "h4",
  [TextVariantEnum.SUBTITLE_1]: "h5",
  [TextVariantEnum.SUBTITLE_2]: "h6",
};
