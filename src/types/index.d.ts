declare type JustifyAlignTypes =
  | "space-around"
  | "center"
  | "space-between"
  | "unset";
declare type JustifyAlignFn = (
  justify: JustifyAlignTypes,
  align: JustifyAlignTypes
) => ThemedCssFunction<DefaultTheme>;

declare type OnKeyEvent = React.KeyboardEvent<HTMLInputElement>;
declare type Item = {
  id: number;
  text: string;
  done: boolean;
};

declare type ButtonTypes = "ALL" | "DONING" | "COMPLETED";
declare type ThrottlingType = NodeJS.Timeout | null;
