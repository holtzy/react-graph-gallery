declare module "flubber" {
    export const interpolate: (
      input: string,
      output: string
    ) => (progress: number) => string;
  }
