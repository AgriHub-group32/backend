export declare const imageFileFilter: (_req: any, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) => void;
export declare const multerStorage: import("multer").StorageEngine;
export declare const multerOptions: {
    storage: import("multer").StorageEngine;
    fileFilter: (_req: any, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) => void;
    limits: {
        fileSize: number;
    };
};
