import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { id: 1, url: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/a3171e46-c329-497b-a499-cf0e86ae4662.jpg', title: 'Момент игры', category: 'Матчи' },
    { id: 2, url: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/77036a63-a2e5-4132-878e-afd5dac0482a.jpg', title: 'Празднование победы', category: 'Победы' },
    { id: 3, url: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/5c019306-fa24-406a-a6a9-5f9ff4e71a48.jpg', title: 'Домашняя арена', category: 'Арена' },
    { id: 4, url: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/d4d9f668-8ec8-4bd6-b5cb-d36f9d4a8a38.jpg', title: 'Командное фото', category: 'Команда' },
    { id: 5, url: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/5def1e7f-186e-44dd-b6ed-e9c2b25593d8.jpg', title: 'Момент атаки', category: 'Матчи' },
    { id: 6, url: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/a3171e46-c329-497b-a499-cf0e86ae4662.jpg', title: 'Вратарь в деле', category: 'Матчи' },
    { id: 7, url: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/77036a63-a2e5-4132-878e-afd5dac0482a.jpg', title: 'Радость команды', category: 'Победы' },
    { id: 8, url: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/5c019306-fa24-406a-a6a9-5f9ff4e71a48.jpg', title: 'Подготовка к игре', category: 'Тренировки' },
    { id: 9, url: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/d4d9f668-8ec8-4bd6-b5cb-d36f9d4a8a38.jpg', title: 'Общее фото', category: 'Команда' },
  ];

  const categories = ['Все', 'Матчи', 'Победы', 'Команда', 'Арена', 'Тренировки'];
  const [activeCategory, setActiveCategory] = useState('Все');

  const filteredImages = activeCategory === 'Все' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="relative py-20 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/30">
              <Icon name="Image" className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Фотоархив</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Галерея</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Лучшие моменты команды в фотографиях
            </p>
          </div>
        </section>

        <section className="py-12 bg-card sticky top-20 z-40 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-background text-muted-foreground hover:bg-muted hover:text-foreground border border-border'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative aspect-video overflow-hidden rounded-xl bg-muted cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onClick={() => setSelectedImage(image.url)}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="inline-block bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-2">
                        {image.category}
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{image.title}</h3>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="Maximize2" className="w-5 h-5 text-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-card rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <Icon name="X" className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Просмотр"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 text-center">
            <Icon name="Camera" className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Поделитесь своими фото
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Были на матче и сделали крутые снимки? Отправьте их нам!
            </p>
            <a
              href="/contacts"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              Отправить фото
              <Icon name="Upload" className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
