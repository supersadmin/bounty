import React, { FunctionComponent } from "react";
import { BasicComponent } from "@src/types";

export interface SwiperItemProps extends BasicComponent {
  itemId?: string;
  skipHiddenItemLayout?: boolean;
}

const defaultProps = {
  itemId: "",
  skipHiddenItemLayout: false,
} as SwiperItemProps;

export const SwiperItem: FunctionComponent<Partial<SwiperItemProps>> = (
  props
) => {
  const { children, ...rest } = props;
  return <>{children}</>;
};
SwiperItem.defaultProps = defaultProps;
SwiperItem.displayName = "NutSwiperItem";
