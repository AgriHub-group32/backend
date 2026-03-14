import { diskStorage } from 'multer';
import { extname } from 'path';
import { BadRequestException } from '@nestjs/common';

export const imageFileFilter = (
  _req: any,
  file: Express.Multer.File,
  callback: (error: Error | null, acceptFile: boolean) => void,
) => {
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const ext = extname(file.originalname).toLowerCase();
  if (!allowedExtensions.includes(ext)) {
    return callback(
      new BadRequestException('Only image files (jpg, jpeg, png, webp) are allowed'),
      false,
    );
  }
  callback(null, true);
};

export const multerStorage = diskStorage({
  destination: './uploads',
  filename: (_req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = extname(file.originalname).toLowerCase();
    callback(null, `${uniqueSuffix}${ext}`);
  },
});

export const multerOptions = {
  storage: multerStorage,
  fileFilter: imageFileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
};
