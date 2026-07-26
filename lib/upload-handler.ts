import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const ALLOWED_EXTENSIONS = ["jpg", "jpeg", "png", "gif", "webp", "pdf", "doc", "docx"];
const MAX_FILE_SIZE = 30 * 1024 * 1024; // 30MB

export async function uploadFile(
  file: File,
  folder: string
): Promise<{ url: string; publicId: string }> {
  if (!file) {
    throw new Error("No file provided");
  }

  // Validate file size
  if (file.size > MAX_FILE_SIZE) {
    throw new Error(`File size exceeds ${MAX_FILE_SIZE / 1024 / 1024}MB limit`);
  }

  // Validate extension
  const ext = file.name.split(".").pop()?.toLowerCase();
  if (!ext || !ALLOWED_EXTENSIONS.includes(ext)) {
    throw new Error(`File type .${ext} not allowed`);
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: `fashion-portfolio/${folder}`,
        resource_type: "auto",
        use_filename: true,
      },
      (error, result) => {
        if (error) reject(new Error(`Upload failed: ${error.message}`));
        else if (result) {
          resolve({
            url: result.secure_url,
            publicId: result.public_id,
          });
        } else {
          reject(new Error("Upload failed: No result"));
        }
      }
    );

    uploadStream.on("error", (error) => reject(error));
    uploadStream.end(buffer);
  });
}

export async function deleteFile(publicId: string): Promise<void> {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error(`Failed to delete file ${publicId}:`, error);
    throw error;
  }
}
