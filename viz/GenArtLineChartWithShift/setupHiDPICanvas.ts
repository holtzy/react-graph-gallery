/**
 * Utility to set up a canvas for high-DPI (retina) screens.
 *
 * Why is this important?
 * - On retina and other high-DPI displays, a canvas with only CSS pixel dimensions will appear blurry.
 * - This is because the device has more physical pixels than CSS pixels, so the browser stretches the canvas bitmap.
 * - For dataviz, sharp lines and text are crucial for readability and aesthetics.
 * - This function automatically scales the canvas's internal pixel buffer to match the device's pixel ratio,
 *   ensuring your charts look crisp everywhere.
 *
 * Usage: Call this function in your effect or setup code, passing the canvas element and its intended CSS width/height.
 * It will handle all the complexity for you.
 */
export function setupHiDPICanvas(
    canvas: HTMLCanvasElement | null,
    width: number,
    height: number
): CanvasRenderingContext2D | null {
    if (!canvas) return null;

    const dpr = window.devicePixelRatio || 1;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext('2d');

    if (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
    }

    return ctx;
}
