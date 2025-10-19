import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Achievements = () => {
  const achievements = [
    { 
      title: 'Победитель регулярного чемпионата', 
      season: '2024-2025', 
      icon: 'Trophy',
      description: 'Первое место в регулярном чемпионате REKJHL сезона 2024-2025'
    },
    { 
      title: 'Лучшая оборона лиги', 
      season: '2024-2025', 
      icon: 'Shield',
      description: 'Наименьшее количество пропущенных шайб среди всех команд'
    },
    { 
      title: 'Серия из 12 побед подряд', 
      season: '2024-2025', 
      icon: 'Flame',
      description: 'Рекордная победная серия в истории команды'
    },
    { 
      title: 'Бомбардир сезона', 
      season: '2024-2025', 
      icon: 'Target',
      description: 'Александр Петров - лучший снайпер лиги с 23 голами'
    },
    { 
      title: 'Лучший вратарь месяца', 
      season: '2024-2025', 
      icon: 'Award',
      description: 'Максим Иванов получил награду за октябрь 2024'
    },
    { 
      title: 'Команда месяца', 
      season: '2024-2025', 
      icon: 'Star',
      description: 'Признание от организаторов лиги в сентябре 2024'
    },
  ];

  const milestones = [
    { year: '2024', event: 'Основание команды ХК "Велес"', icon: 'Flag' },
    { year: '2024', event: 'Первая победа в официальном матче', icon: 'PartyPopper' },
    { year: '2024', event: 'Выход в плей-офф REKJHL', icon: 'TrendingUp' },
    { year: '2025', event: 'Победа в регулярном чемпионате', icon: 'Trophy' },
  ];

  const records = [
    { title: 'Самая крупная победа', value: '8:0', description: 'Против команды "Тайфун"' },
    { title: 'Лучшая серия без поражений', value: '12 матчей', description: 'Сентябрь-октябрь 2024' },
    { title: 'Рекорд посещаемости', value: '2,500', description: 'Зрителей на домашнем матче' },
    { title: 'Самый быстрый гол', value: '15 сек', description: 'Андрей Смирнов' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="relative py-20 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/30">
              <Icon name="Trophy" className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Наша гордость</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Достижения</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Победы и рекорды, которыми мы по праву гордимся
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Награды сезона</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border hover:border-primary transition-all hover:scale-105 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={achievement.icon as any} className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h3>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    {achievement.season}
                  </div>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Рекорды команды</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {records.map((record, index) => (
                <div 
                  key={index}
                  className="bg-background rounded-xl p-6 text-center border border-border hover:border-primary transition-all hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">{record.title}</h3>
                  <p className="text-4xl font-bold text-primary mb-2">{record.value}</p>
                  <p className="text-sm text-muted-foreground">{record.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">История команды</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
                
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className="relative pl-20 pb-12 animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute left-5 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
                    <div className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                          <Icon name={milestone.icon as any} className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-primary">{milestone.year}</p>
                        </div>
                      </div>
                      <p className="text-lg text-foreground font-semibold">{milestone.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <Icon name="Sparkles" className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Это только начало
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Мы продолжаем писать историю нашей команды и стремимся к новым вершинам
            </p>
            <a 
              href="/team" 
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              Познакомиться с командой
              <Icon name="Users" className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Achievements;
