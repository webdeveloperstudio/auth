export interface basePhotoInterface {
    thumb: {
        path: string;
        filename: string;
        mimeType: string;
        size: number;
        originalName: string;
        destination: string;
    };
    large: {
        path: string;
        filename: string;
        mimeType: string;
        size: number;
        originalName: string;
        destination: string;
    };
    order?: number;
    createdAt?: Date;
}

export const blankPhotoRecord: basePhotoInterface = {
    thumb: {
        filename: "/uploads/news/no-photo",
        mimeType: "image/jpeg",
        originalName: "cover/none",
        path: "/uploads",
        size: 0,
        destination: ""
    },
    large: {
        filename: "/uploads/news/no-photo",
        mimeType: "image/jpeg",
        originalName: "cover/none",
        path: "/uploads",
        size: 0,
        destination: ""
    }
};
export const blankPhotoRecordStr: basePhotoInterface = { "thumb": { "filename": "/uploads/news/no-photo", "mimeType": "image/jpeg", "originalName": "cover/none", "path": "/uploads", "size": 0, "destination": "" }, "large": { "filename": "/uploads/news/no-photo", "mimeType": "image/jpeg", "originalName": "cover/none", "path": "/uploads", "size": 0, "destination": "" } };