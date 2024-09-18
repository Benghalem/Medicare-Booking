interface DateOptions {
  day: "numeric" | "2-digit";
  month: "numeric" | "2-digit" | "long" | "short" | "narrow";
  year: "numeric" | "2-digit";
}
export const formateDate = (date: string, config?: DateOptions) => {
  const defualtOptions: DateOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const option: DateOptions = config ? config : defualtOptions;

  return new Date(date).toLocaleDateString("en-US", option);
};
