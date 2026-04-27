import { GalleryPhoto } from "./GalleryAlbum";

export interface GalleryAlbum {
    id: number;
    title: string;
    country: string;
    photosCount: number;
    coverImage: string;
    photos: GalleryPhoto[];
}

