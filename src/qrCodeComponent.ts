import * as qr from 'qr-image';

export default class QRCodeComponent {
    /**
     * Generates a QR code synchronously.
     * The QR code is created as an SVG path.
     * The error correction level is M.
     *
     * @param attrs Data to encode in the QR code
     * @returns SVG string of the QR code
     */
    static generateQRCodeSync(attrs: Record<string, string>): string {
        // Convert the data to a string if it's not already
        let stringData = JSON.stringify(attrs);

        // Generate the QR code
        let qrSvg = qr.imageSync(stringData, { type: 'svg' }) as string;

        // Return the SVG as a string
        return qrSvg;
    }

    render(attrs: Record<string, string>): string {
        const qrSvg = QRCodeComponent.generateQRCodeSync(attrs);
        return qrSvg;
    }
}
