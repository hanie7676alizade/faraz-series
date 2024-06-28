import { Direction } from "../../../types/types";
import { toPersianDate } from "../../../utils/helpers";
import {
  PatternEnum,
  TextAlignmentEnum,
  TextVariantEnum,
  headingElements,
  headingVariants,
  paragraphVariants,
  spanVariants,
} from "./constant";

export function getClasses(
  alignment: TextAlignmentEnum,
  ellipsis: boolean,
  color?: string,
  direction?: Direction
): string {
  let classList: string = alignment;
  if (direction) {
    classList += ` ${direction}`;
  }
  if (ellipsis) {
    classList += " truncate";
  }

  if (color) {
    classList += ` ${color} `;
  }

  return classList;
}

export interface TextProps {
  variant?: TextVariantEnum;
  text: string;
  alignment?: TextAlignmentEnum;
  ellipsis?: boolean;
  color?: string;
  className?: string;
  direction?: Direction;
  pattern?: PatternEnum;
}

export function Typography(props: TextProps) {
  const {
    alignment = TextAlignmentEnum.RIGHT,
    ellipsis = false,
    variant = TextVariantEnum.HEADING_1,
    text,
    color,
    className,
    direction,
  } = props;
  const patternHandler = () => {
    switch (props.pattern) {
      case PatternEnum.NUMBER:
        return Number(text).toLocaleString();
      case PatternEnum.DATE:
        return toPersianDate(Number(text));
      default:
        return text;
    }
  };

  function getElement() {
    const classList = getClasses(alignment, ellipsis, color);
    if (headingVariants.includes(variant)) {
      const Tag = headingElements[variant] as keyof JSX.IntrinsicElements;

      return (
        <Tag
          dir={direction}
          className={`${variant} ${classList} ${className ?? ""} `}
        >
          {patternHandler()}
        </Tag>
      );
    }
    if (paragraphVariants.includes(variant)) {
      return (
        <p
          dir={direction}
          className={`${variant} ${classList} ${className ?? ""}`}
        >
          {patternHandler()}
        </p>
      );
    }
    if (spanVariants.includes(variant)) {
      return (
        <span
          dir={direction}
          className={`${variant} ${classList} ${className ?? ""}`}
        >
          {patternHandler()}
        </span>
      );
    }

    return null;
  }

  return getElement();
}
