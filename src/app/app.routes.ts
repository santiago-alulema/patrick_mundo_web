import { GalleryAlbum } from './features/gallery/models/gallry.interface';
import { Routes } from '@angular/router';
import { SocialPage } from './features/social/pages/social-page/social-page';
import { AboutPage } from './features/about/pages/about-page/about-page';
import { GalleryDetailPage } from './features/gallery/pages/gallery-detail-page/gallery-detail-page';
import { GalleryEditorPage } from './pages/gallery-editor-page/gallery-editor-page';
import { ImageWatermarkPage } from './pages/image-watermark-page/image-watermark-page';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./features/home/pages/home-page/home-page')
                .then(m => m.HomePage),
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./features/home/pages/landing-page/landing-page')
                .then(m => m.LandingPage),
    },
    {
        path: 'gallery',
        loadComponent: () =>
            import('./features/gallery/pages/gallery-page/gallery-page')
                .then(m => m.GalleryPage),
    },
    { path: 'social', component: SocialPage },
    { path: 'about', component: AboutPage },
    {
        path: 'gallery/:id',
        component: GalleryDetailPage
    },
    {
        path: 'admin-gallery-editor',
        component: GalleryEditorPage
    },
    {
        path: 'edit-images-editor',
        component: ImageWatermarkPage
    }
];
