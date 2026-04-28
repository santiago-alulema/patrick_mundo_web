import { Component } from '@angular/core';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-watermark-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './image-watermark-page.html',
  styleUrl: './image-watermark-page.css'
})
export class ImageWatermarkPage {
  selectedFiles: File[] = [];
  isProcessing = false;
  quality = 0.7;

  watermarkUrl = 'images/logo-patrick.png'; // coloca tu logo en src/assets

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files) return;

    this.selectedFiles = Array.from(input.files).filter(file =>
      file.type.startsWith('image/')
    );
  }

  async downloadZip(): Promise<void> {
    if (this.selectedFiles.length === 0) return;

    this.isProcessing = true;

    try {
      const zip = new JSZip();

      for (const file of this.selectedFiles) {
        const blob = await this.processImage(file);

        const cleanName = file.name.replace(/\.[^/.]+$/, '');
        zip.file(`${cleanName}-marca-agua.jpg`, blob);
      }

      const zipBlob = await zip.generateAsync({ type: 'blob' });
      saveAs(zipBlob, 'imagenes-optimizadas.zip');
    } finally {
      this.isProcessing = false;
    }
  }

  private async processImage(file: File): Promise<Blob> {
    const image = await this.loadImage(URL.createObjectURL(file));
    const watermark = await this.loadImage(this.watermarkUrl);

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) throw new Error('No se pudo crear el canvas');

    const maxWidth = 1200;
    const scale = Math.min(maxWidth / image.width, 1);

    canvas.width = Math.round(image.width * scale);
    canvas.height = Math.round(image.height * scale);

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

    this.drawWatermark(ctx, canvas, watermark);

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        blob => {
          if (!blob) {
            reject(new Error('No se pudo procesar la imagen'));
            return;
          }

          resolve(blob);
        },
        'image/jpeg',
        this.quality
      );
    });
  }

  private drawWatermark(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    watermark: HTMLImageElement
  ): void {

    const spacing = 120; // distancia entre logos (ajústalo)
    const wmWidth = canvas.width * 0.15;
    const wmHeight = (watermark.height / watermark.width) * wmWidth;

    ctx.save();
    ctx.globalAlpha = 0.15; // transparencia

    for (let y = -wmHeight; y < canvas.height + wmHeight; y += wmHeight + spacing) {
      for (let x = -wmWidth; x < canvas.width + wmWidth; x += wmWidth + spacing) {

        ctx.save();

        // 🔥 rotación para estilo profesional
        ctx.translate(x + wmWidth / 2, y + wmHeight / 2);
        ctx.rotate(-Math.PI / 6); // -30 grados

        ctx.drawImage(
          watermark,
          -wmWidth / 2,
          -wmHeight / 2,
          wmWidth,
          wmHeight
        );

        ctx.restore();
      }
    }

    ctx.restore();
  }
  private loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error('No se pudo cargar la imagen'));

      img.src = src;
    });
  }
}