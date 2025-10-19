import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Team = () => {
  const players = [
    { id: 1, name: 'Triton', position: 'Защитник', number: 24, goals: 0, assists: 0, image: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/77036a63-a2e5-4132-878e-afd5dac0482a.jpg' },
    { id: 2, name: 'QwazaRR', position: 'Вратарь', number: 88, goals: 0, assists: 0, image: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/5c019306-fa24-406a-a6a9-5f9ff4e71a48.jpg' },
    { id: 3, name: 'Александр Петров', position: 'Нападающий', number: 17, goals: 23, assists: 15, image: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/a3171e46-c329-497b-a499-cf0e86ae4662.jpg' },
    { id: 4, name: 'Дмитрий Соколов', position: 'Защитник', number: 5, goals: 4, assists: 18, image: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/77036a63-a2e5-4132-878e-afd5dac0482a.jpg' },
    { id: 5, name: 'Максим Иванов', position: 'Вратарь', number: 1, goals: 0, assists: 2, image: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/5c019306-fa24-406a-a6a9-5f9ff4e71a48.jpg' },
    { id: 6, name: 'Андрей Смирнов', position: 'Нападающий', number: 11, goals: 19, assists: 21, image: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/a3171e46-c329-497b-a499-cf0e86ae4662.jpg' },
    { id: 7, name: 'Павел Морозов', position: 'Защитник', number: 7, goals: 6, assists: 14, image: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/77036a63-a2e5-4132-878e-afd5dac0482a.jpg' },
    { id: 8, name: 'Сергей Волков', position: 'Нападающий', number: 22, goals: 17, assists: 12, image: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/5c019306-fa24-406a-a6a9-5f9ff4e71a48.jpg' },
    { id: 9, name: 'Евгений Ковалев', position: 'Защитник', number: 3, goals: 5, assists: 16, image: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/a3171e46-c329-497b-a499-cf0e86ae4662.jpg' },
    { id: 10, name: 'Владимир Орлов', position: 'Вратарь', number: 30, goals: 0, assists: 1, image: 'https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/5c019306-fa24-406a-a6a9-5f9ff4e71a48.jpg' },
  ];

  const staff = [
    { name: 'W1zard', role: 'Главный тренер', icon: 'User' },
    { name: 'Михаил Громов', role: 'Ассистент тренера', icon: 'Users' },
    { name: 'Анна Соколова', role: 'Врач команды', icon: 'Heart' },
    { name: 'Дмитрий Белов', role: 'Физиотерапевт', icon: 'Activity' },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="relative py-20 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/30">
              <Icon name="Users" className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Наша сила</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Состав команды</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Знакомьтесь с профессионалами, которые защищают честь ХК "Велес" на льду
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Игроки</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {players.map((player, index) => (
                <div 
                  key={player.id} 
                  className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all hover:scale-105 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <img 
                      src={player.image} 
                      alt={player.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-primary-foreground">{player.number}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{player.name}</h3>
                    <p className="text-sm text-primary font-semibold uppercase tracking-wider mb-4">{player.position}</p>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-background rounded-lg p-3 text-center border border-border">
                        <Icon name="Target" className="w-5 h-5 text-primary mx-auto mb-1" />
                        <p className="text-2xl font-bold text-foreground">{player.goals}</p>
                        <p className="text-xs text-muted-foreground">Голы</p>
                      </div>
                      <div className="bg-background rounded-lg p-3 text-center border border-border">
                        <Icon name="TrendingUp" className="w-5 h-5 text-accent mx-auto mb-1" />
                        <p className="text-2xl font-bold text-foreground">{player.assists}</p>
                        <p className="text-xs text-muted-foreground">Передачи</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Тренерский штаб</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {staff.map((member, index) => (
                <div 
                  key={index}
                  className="bg-background rounded-xl p-8 text-center border border-border hover:border-primary transition-all hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={member.icon as any} className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-12 text-center border border-primary/30">
              <Icon name="UserPlus" className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Хочешь присоединиться?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Мы всегда ищем талантливых игроков для усиления нашей команды
              </p>
              <a 
                href="/contacts" 
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
              >
                Связаться с нами
                <Icon name="ArrowRight" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;