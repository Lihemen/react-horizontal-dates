type Primitives = string | number | boolean | null | symbol | undefined;

export type DeepPartial<Argument> = Argument extends Primitives
  ? Partial<Argument>
  : Argument extends Record<PropertyKey, unknown>
    ? {
        [Key in keyof Argument]?: DeepPartial<Argument[Key]>;
      }
    : Partial<Argument>;
