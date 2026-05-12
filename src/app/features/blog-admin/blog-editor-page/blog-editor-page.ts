import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BlogAdminService, BlogPost, Category } from '../services/blog-admin.service';

@Component({
  selector: 'app-blog-editor-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-editor-page.html',
  styleUrl: './blog-editor-page.css',
})
export class BlogEditorPage implements OnInit {
  posts = signal<BlogPost[]>([]);
  categories = signal<Category[]>([]);

  message = signal('');
  loading = signal(false);
  uploadingCover = signal(false);
  editingPostId = signal<number | null>(null);

  selectedCoverFile: File | null = null;

  postForm = {
    title: '',
    slug: '',
    summary: '',
    content: '',
    coverImage: '',
    isPublished: false,
    categoryId: 0
  };

  categoryForm = {
    name: '',
    slug: ''
  };

  constructor(private blogService: BlogAdminService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading.set(true);

    this.blogService.getCategories().subscribe({
      next: categories => {
        this.categories.set(categories);
      }
    });

    this.blogService.getPosts().subscribe({
      next: posts => {
        this.posts.set(posts);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.message.set('No se pudieron cargar los posts.');
      }
    });
  }

  onTitleChange(): void {
    if (!this.editingPostId()) {
      this.postForm.slug = this.generateSlug(this.postForm.title);
    }
  }

  onCategoryNameChange(): void {
    this.categoryForm.slug = this.generateSlug(this.categoryForm.name);
  }

  onCoverSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) return;

    this.selectedCoverFile = input.files[0];
    this.message.set(`Portada seleccionada: ${this.selectedCoverFile.name}`);
  }

  uploadCover(): void {
    if (!this.selectedCoverFile) {
      this.message.set('Selecciona una imagen de portada.');
      return;
    }

    this.uploadingCover.set(true);

    this.blogService.uploadImage(this.selectedCoverFile).subscribe({
      next: response => {
        this.postForm.coverImage = response.imageUrl;
        this.uploadingCover.set(false);
        this.message.set('Portada subida correctamente.');
      },
      error: () => {
        this.uploadingCover.set(false);
        this.message.set('No se pudo subir la portada.');
      }
    });
  }

  savePost(): void {
    if (!this.postForm.title.trim()) {
      this.message.set('El título es obligatorio.');
      return;
    }

    if (!this.postForm.categoryId) {
      this.message.set('Selecciona una categoría.');
      return;
    }

    if (!this.postForm.coverImage) {
      this.message.set('Sube una portada para el post.');
      return;
    }

    const post = {
      ...this.postForm,
      categoryId: Number(this.postForm.categoryId)
    };

    const editingId = this.editingPostId();

    if (editingId) {
      this.blogService.updatePost(editingId, post).subscribe({
        next: () => {
          this.message.set('Post actualizado correctamente.');
          this.clearPostForm();
          this.loadData();
        },
        error: () => {
          this.message.set('No se pudo actualizar el post.');
        }
      });

      return;
    }

    this.blogService.createPost(post).subscribe({
      next: () => {
        this.message.set('Post creado correctamente.');
        this.clearPostForm();
        this.loadData();
      },
      error: () => {
        this.message.set('No se pudo crear el post.');
      }
    });
  }

  editPost(post: BlogPost): void {
    this.editingPostId.set(post.id);

    this.postForm = {
      title: post.title,
      slug: post.slug,
      summary: post.summary,
      content: post.content,
      coverImage: post.coverImage,
      isPublished: post.isPublished,
      categoryId: post.categoryId
    };

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deletePost(id: number): void {
    const confirmDelete = confirm('¿Seguro que deseas eliminar este post?');

    if (!confirmDelete) return;

    this.blogService.deletePost(id).subscribe({
      next: () => {
        this.message.set('Post eliminado correctamente.');
        this.loadData();
      },
      error: () => {
        this.message.set('No se pudo eliminar el post.');
      }
    });
  }

  createCategory(): void {
    if (!this.categoryForm.name.trim()) {
      this.message.set('El nombre de la categoría es obligatorio.');
      return;
    }

    this.blogService.createCategory(this.categoryForm).subscribe({
      next: category => {
        this.categories.update(categories => [...categories, category]);
        this.postForm.categoryId = category.id;
        this.categoryForm = { name: '', slug: '' };
        this.message.set('Categoría creada correctamente.');
      },
      error: () => {
        this.message.set('No se pudo crear la categoría.');
      }
    });
  }

  clearPostForm(): void {
    this.editingPostId.set(null);
    this.selectedCoverFile = null;

    this.postForm = {
      title: '',
      slug: '',
      summary: '',
      content: '',
      coverImage: '',
      isPublished: false,
      categoryId: 0
    };
  }

  private generateSlug(value: string): string {
    return value
      .toLowerCase()
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
}