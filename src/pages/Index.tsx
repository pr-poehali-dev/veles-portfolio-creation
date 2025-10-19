import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const teamPlayers = [
    { id: 1, name: 'Александр Петров', position: 'Нападающий', number: 17, goals: 23, assists: 15 },
    { id: 2, name: 'Дмитрий Соколов', position: 'Защитник', number: 5, goals: 4, assists: 18 },
    { id: 3, name: 'Максим Иванов', position: 'Вратарь', number: 1, goals: 0, assists: 2 },
    { id: 4, name: 'Андрей Смирнов', position: 'Нападающий', number: 11, goals: 19, assists: 21 },
    { id: 5, name: 'Павел Морозов', position: 'Защитник', number: 7, goals: 6, assists: 14 },
    { id: 6, name: 'Сергей Волков', position: 'Нападающий', number: 22, goals: 17, assists: 12 },
  ];

  const achievements = [
    { title: 'Победитель регулярного чемпионата', season: '2024-2025', icon: 'Trophy' },
    { title: 'Лучшая оборона лиги', season: '2024-2025', icon: 'Shield' },
    { title: 'Серия из 12 побед подряд', season: '2024-2025', icon: 'Flame' },
  ];

  const stats = {
    matches: 48,
    wins: 34,
    draws: 8,
    losses: 6,
    goalsFor: 156,
    goalsAgainst: 89,
  };

  const galleryImages = [
    'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/d4d9f668-8ec8-4bd6-b5cb-d36f9d4a8a38.jpg',
    'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/5def1e7f-186e-44dd-b6ed-e9c2b25593d8.jpg',
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-oswald text-2xl font-bold">
                В
              </div>
              <div>
                <h1 className="font-oswald text-xl font-bold">ВЕЛЕС</h1>
                <p className="text-xs text-muted-foreground">REKJHL • Сезон 5</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Команда', 'Достижения', 'Статистика', 'Галерея', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button size="sm" className="hidden md:flex">
              <Icon name="Mail" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Сезон 2024-2025
              </Badge>
              <h2 className="font-oswald text-6xl lg:text-7xl font-bold leading-tight">
                КОМАНДА
                <br />
                <span className="text-primary">ВЕЛЕС</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Хоккейный клуб REKJHL 5 сезона — команда, где сила встречается с мастерством, 
                а победа становится традицией
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('команда')}>
                  <Icon name="Users" size={20} className="mr-2" />
                  Наша команда
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('статистика')}>
                  Статистика
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
              <img
                src={galleryImages[0]}
                alt="Команда Велес"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-oswald font-bold">{stats.wins}</p>
                    <p className="text-sm text-muted-foreground">Побед</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-accent/20 hover:border-accent/40 transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name="Target" size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-3xl font-oswald font-bold">{stats.goalsFor}</p>
                    <p className="text-sm text-muted-foreground">Забито голов</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-secondary/20 hover:border-secondary/40 transition-all hover:scale-105">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-3xl font-oswald font-bold">{stats.goalsAgainst}</p>
                    <p className="text-sm text-muted-foreground">Пропущено</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="команда" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Состав команды</Badge>
            <h2 className="font-oswald text-5xl font-bold mb-4">НАШИ ИГРОКИ</h2>
            <p className="text-muted-foreground text-lg">Профессионалы, которые делают нас сильнее</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamPlayers.map((player, index) => (
              <Card key={player.id} className="hover:scale-105 transition-transform" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-oswald">{player.name}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{player.position}</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <span className="font-oswald text-xl font-bold">{player.number}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <div className="flex-1 bg-muted/50 rounded-lg p-3 text-center">
                      <p className="text-2xl font-oswald font-bold text-primary">{player.goals}</p>
                      <p className="text-xs text-muted-foreground">Голы</p>
                    </div>
                    <div className="flex-1 bg-muted/50 rounded-lg p-3 text-center">
                      <p className="text-2xl font-oswald font-bold text-accent">{player.assists}</p>
                      <p className="text-xs text-muted-foreground">Передачи</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="достижения" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Успехи</Badge>
            <h2 className="font-oswald text-5xl font-bold mb-4">ДОСТИЖЕНИЯ</h2>
            <p className="text-muted-foreground text-lg">Результаты нашего труда и упорства</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-muted/30 border-2 hover:border-primary transition-all hover:scale-105">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={achievement.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-oswald text-xl font-bold mb-2">{achievement.title}</h3>
                  <Badge variant="outline">{achievement.season}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="статистика" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Цифры сезона</Badge>
            <h2 className="font-oswald text-5xl font-bold mb-4">СТАТИСТИКА</h2>
          </div>
          <Card>
            <CardContent className="pt-8">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="overview">Обзор</TabsTrigger>
                  <TabsTrigger value="detailed">Детально</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-6 mt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 rounded-lg p-6 text-center">
                      <p className="text-4xl font-oswald font-bold text-primary">{stats.matches}</p>
                      <p className="text-sm text-muted-foreground mt-2">Матчей сыграно</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-6 text-center">
                      <p className="text-4xl font-oswald font-bold text-accent">{((stats.wins / stats.matches) * 100).toFixed(0)}%</p>
                      <p className="text-sm text-muted-foreground mt-2">Процент побед</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Победы</span>
                      <div className="flex items-center gap-3">
                        <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${(stats.wins / stats.matches) * 100}%` }}></div>
                        </div>
                        <span className="font-oswald font-bold w-8">{stats.wins}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Ничьи</span>
                      <div className="flex items-center gap-3">
                        <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-accent" style={{ width: `${(stats.draws / stats.matches) * 100}%` }}></div>
                        </div>
                        <span className="font-oswald font-bold w-8">{stats.draws}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Поражения</span>
                      <div className="flex items-center gap-3">
                        <div className="w-48 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-destructive" style={{ width: `${(stats.losses / stats.matches) * 100}%` }}></div>
                        </div>
                        <span className="font-oswald font-bold w-8">{stats.losses}</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="detailed" className="space-y-4 mt-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Icon name="Target" size={32} className="text-primary mx-auto mb-2" />
                        <p className="text-3xl font-oswald font-bold">{stats.goalsFor}</p>
                        <p className="text-sm text-muted-foreground">Забито голов</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Icon name="Shield" size={32} className="text-secondary mx-auto mb-2" />
                        <p className="text-3xl font-oswald font-bold">{stats.goalsAgainst}</p>
                        <p className="text-sm text-muted-foreground">Пропущено</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Icon name="TrendingUp" size={32} className="text-accent mx-auto mb-2" />
                        <p className="text-3xl font-oswald font-bold">+{stats.goalsFor - stats.goalsAgainst}</p>
                        <p className="text-sm text-muted-foreground">Разница мячей</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6 text-center">
                        <Icon name="BarChart3" size={32} className="text-primary mx-auto mb-2" />
                        <p className="text-3xl font-osload font-bold">{(stats.goalsFor / stats.matches).toFixed(1)}</p>
                        <p className="text-sm text-muted-foreground">Голов за матч</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="галерея" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Моменты</Badge>
            <h2 className="font-oswald text-5xl font-bold mb-4">ГАЛЕРЕЯ</h2>
            <p className="text-muted-foreground text-lg">Лучшие моменты команды в фотографиях</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl aspect-video">
                <img
                  src={image}
                  alt={`Галерея ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <Badge className="mb-4">Связь</Badge>
          <h2 className="font-oswald text-5xl font-bold mb-4">КОНТАКТЫ</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Свяжитесь с нами для сотрудничества, спонсорства или участия в тренировках
          </p>
          <Card>
            <CardContent className="pt-8 space-y-6">
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                <Icon name="Mail" size={24} className="text-primary" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">veles@rekjhl.ru</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                <Icon name="Phone" size={24} className="text-accent" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <p className="font-medium">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                <Icon name="MapPin" size={24} className="text-secondary" />
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Арена</p>
                  <p className="font-medium">Ледовый Дворец «Спартак»</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-oswald text-xl font-bold">
              В
            </div>
            <span className="font-oswald text-lg font-bold">ВЕЛЕС</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 ХК Велес REKJHL. Сезон 5. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;