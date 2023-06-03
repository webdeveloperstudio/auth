export interface baseFileInterface {
    path: string;
    filename: string;
    extname?: string;
    mimeType: string;
    size: number;
    originalName: string;
    destination: string;
    checksum: string;
    createdAt?: Date;
}
