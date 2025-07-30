export function exportCanvasAsImage(
    canvas: HTMLCanvasElement,
    filename: string,
    mimeType: string = 'image/png'
) {
    if (!canvas) return;
    const url = canvas.toDataURL(mimeType);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
