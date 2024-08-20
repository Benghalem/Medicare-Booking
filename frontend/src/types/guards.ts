// this is predicate guards for types
// if type is string return type of value is string
const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

export { isString };
