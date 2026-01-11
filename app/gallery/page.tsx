"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { localGalleryImages } from "@/lib/galleryAssets";
import { X } from "lucide-react";

const remoteGalleryImages = [
  {
    url: "https://images.pexels.com/photos/6899305/pexels-photo-6899305.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Slabs",
    title: "Black Galaxy Granite Slab",
  },
  {
    url: "https://images.pexels.com/photos/7534555/pexels-photo-7534555.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Slabs",
    title: "Steel Grey Granite",
  },
  {
    url: "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Slabs",
    title: "White Granite Surface",
  },
  {
    url: "https://images.pexels.com/photos/6899163/pexels-photo-6899163.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Slabs",
    title: "Brown Granite Texture",
  },
  {
    url: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Slabs",
    title: "Polished Black Granite",
  },
  {
    url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Factory",
    title: "Cutting Facility",
  },
  {
    url: "https://images.pexels.com/photos/4247692/pexels-photo-4247692.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Installation",
    title: "Kitchen Installation",
  },
  {
    url: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Installation",
    title: "Bathroom Countertop",
  },
  {
    url: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Slabs",
    title: "Granite Samples",
  },
  {
    url: "https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Installation",
    title: "Modern Kitchen Design",
  },
  {
    url: "https://images.pexels.com/photos/6899293/pexels-photo-6899293.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Slabs",
    title: "Granite Details",
  },
  {
    url: "https://images.pexels.com/photos/3935350/pexels-photo-3935350.jpeg?auto=compress&cs=tinysrgb&w=1200",
    category: "Factory",
    title: "Quality Control",
  },
];

// Merge local images (if any) with remote images. Local images take precedence and will be shown first.
const galleryImages = [...localGalleryImages, ...remoteGalleryImages];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <div className="pt-20">
      <section className="relative py-20 bg-gradient-to-br from-[#2E2E2E] to-[#1a1a1a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
              Gallery
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Explore our collection of premium granite slabs, state-of-the-art facilities, and completed installations
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer bg-gray-100"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm mb-1">{image.title}</p>
                    <p className="text-white/70 text-xs">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-full p-0 bg-black/95 border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          {selectedImage && (
            <div className="relative w-full h-[80vh] flex items-center justify-center p-4">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-white/70">{selectedImage.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
