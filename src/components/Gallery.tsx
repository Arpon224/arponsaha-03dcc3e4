import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder gallery categories - can be updated with actual images
  const galleryCategories = [
    {
      title: 'Industrial Experience',
      description: 'Work experience at JK Knit Composite Ltd',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop',
    },
    {
      title: 'University Projects',
      description: 'Academic projects and research work',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop',
    },
    {
      title: 'Art & Photography',
      description: 'Creative works from ARTEX club',
      image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&auto=format&fit=crop',
    },
    {
      title: 'Events & Activities',
      description: 'Leadership events and cultural programs',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop',
    },
    {
      title: 'Textile Production',
      description: 'Knitting, dyeing, and testing processes',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea41f9cd?w=800&auto=format&fit=crop',
    },
    {
      title: 'Achievements',
      description: 'Awards and recognition',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
    },
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Photo <span className="text-primary">Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual journey through my professional experiences, projects, and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryCategories.map((category, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden border-border hover:border-primary transition-all duration-300 animate-fade-in"
              onClick={() => setSelectedImage(category.image)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-foreground mb-1">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 border-primary">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery item"
                className="w-full h-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
