import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/a3171e46-c329-497b-a499-cf0e86ae4662.jpg)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/30">
              <Icon name="Trophy" className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Сезон 5 REKJHL</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 leading-none">
              ХК <span className="text-primary">ВЕЛЕС</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Сила, скорость и непревзойденная команда духа на льду
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/team" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                Наша команда
                <Icon name="ArrowRight" className="w-5 h-5" />
              </a>
              <a 
                href="/achievements" 
                className="bg-card hover:bg-muted text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 border border-border flex items-center justify-center gap-2"
              >
                Достижения
                <Icon name="Award" className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <Icon name="ChevronDown" className="w-8 h-8 text-primary" />
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-background rounded-xl border border-border hover:border-primary transition-all hover:scale-105 animate-scale-in">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-2">25+</h3>
                <p className="text-muted-foreground">Игроков в составе</p>
              </div>

              <div className="text-center p-8 bg-background rounded-xl border border-border hover:border-primary transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Trophy" className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-2">12</h3>
                <p className="text-muted-foreground">Побед в сезоне</p>
              </div>

              <div className="text-center p-8 bg-background rounded-xl border border-border hover:border-primary transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-4xl font-bold text-foreground mb-2">156</h3>
                <p className="text-muted-foreground">Голов забито</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">О команде</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in">
                <img 
                  src="https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/77036a63-a2e5-4132-878e-afd5dac0482a.jpg" 
                  alt="Команда Велес"
                  className="rounded-xl shadow-2xl"
                />
              </div>

              <div className="space-y-6 animate-fade-in">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ХК "Велес" – это команда, где каждый игрок горит желанием побеждать. Мы представляем 5 сезон REKJHL с гордостью и амбициями стать лучшими в лиге.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Наша философия основана на дисциплине, взаимоподдержке и постоянном развитии. Каждая тренировка, каждая игра – это шаг к совершенству.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <Icon name="Shield" className="w-8 h-8 text-primary mb-3" />
                    <h4 className="text-lg font-semibold text-foreground mb-2">Надежная защита</h4>
                    <p className="text-sm text-muted-foreground">Крепкая оборона на льду</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <Icon name="Zap" className="w-8 h-8 text-primary mb-3" />
                    <h4 className="text-lg font-semibold text-foreground mb-2">Быстрые атаки</h4>
                    <p className="text-sm text-muted-foreground">Молниеносный переход в нападение</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Последние новости</h2>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-xl overflow-hidden border border-border hover:border-primary transition-all hover:scale-105">
                <div className="h-48 bg-muted relative overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/5c019306-fa24-406a-a6a9-5f9ff4e71a48.jpg"
                    alt="Новость"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wider">15 октября 2025</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Разгромная победа в домашнем матче</h3>
                  <p className="text-muted-foreground mb-4">Команда Велес одержала уверенную победу со счетом 5:1 над соперниками из другого города.</p>
                  <a href="#" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Читать далее
                    <Icon name="ArrowRight" className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="bg-background rounded-xl overflow-hidden border border-border hover:border-primary transition-all hover:scale-105">
                <div className="h-48 bg-muted relative overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/a3171e46-c329-497b-a499-cf0e86ae4662.jpg"
                    alt="Новость"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wider">12 октября 2025</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Новый рекорд сезона установлен</h3>
                  <p className="text-muted-foreground mb-4">Наш форвард забил 3 шайбы за один период, установив новый рекорд команды.</p>
                  <a href="#" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Читать далее
                    <Icon name="ArrowRight" className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="bg-background rounded-xl overflow-hidden border border-border hover:border-primary transition-all hover:scale-105">
                <div className="h-48 bg-muted relative overflow-hidden">
                  <img 
                    src="https://cdn.poehali.dev/projects/2ea6575c-c3a6-4e96-9c59-3e08920e844f/files/77036a63-a2e5-4132-878e-afd5dac0482a.jpg"
                    alt="Новость"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wider">8 октября 2025</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Пополнение в составе команды</h3>
                  <p className="text-muted-foreground mb-4">К нам присоединился опытный защитник из молодежной сборной России.</p>
                  <a href="#" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Читать далее
                    <Icon name="ArrowRight" className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <Icon name="Heart" className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Поддержи свою команду!</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Приходи на наши домашние матчи и стань частью победы
            </p>
            <a 
              href="/contacts" 
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
            >
              Купить билет
              <Icon name="Ticket" className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
