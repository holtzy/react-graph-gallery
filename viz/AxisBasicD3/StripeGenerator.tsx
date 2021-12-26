export const StripGenerator = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <>
      <defs>
        <pattern
          id="pattern_rkDsm"
          patternUnits="userSpaceOnUse"
          width="9.5"
          height="2.5"
          patternTransform="rotate(41)"
        >
          <line x1="0" y="0" x2="0" y2="9.5" stroke="#D9B9F3" strokeWidth="1" />
        </pattern>
      </defs>
      <rect
        width={width}
        height={height}
        fill="url(#pattern_rkDsm)"
        opacity="1"
      />
    </>
  );
};
