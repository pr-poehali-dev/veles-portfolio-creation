import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Stats = () => {
  const seasonStats = {
    matches: 48,
    wins: 34,
    draws: 8,
    losses: 6,
    goalsFor: 156,
    goalsAgainst: 89,
    points: 110,
  };

  const topScorers = [
    { rank: 1, name: 'Александр Петров', goals: 23, assists: 15, total: 38 },
    { rank: 2, name: 'Николай Федоров', goals: 21, assists: 13, total: 34 },
    { rank: 3, name: 'Андрей Смирнов', goals: 19, assists: 21, total: 40 },
    { rank: 4, name: 'Сергей Волков', goals: 17, assists: 12, total: 29 },
    { rank: 5, name: 'Павел Морозов', goals: 6, assists: 14, total: 20 },
  ];

  const recentMatches = [
    { date: '15.10.2025', opponent: 'ХК Тайфун', score: '5:1', result: 'win', location: 'Дома' },
    { date: '12.10.2025', opponent: 'ХК Молния', score: '3:2', result: 'win', location: 'В гостях' },
    { date: '08.10.2025', opponent: 'ХК Буран', score: '2:2', result: 'draw', location: 'Дома' },
    { date: '05.10.2025', opponent: 'ХК Ураган', score: '4:1', result: 'win', location: 'В гостях' },
    { date: '01.10.2025', opponent: 'ХК Метеор', score: '1:3', result: 'loss', location: 'Дома' },
  ];

  const teamComparison = [
    { metric: 'Владение шайбой', value: 58, max: 100 },
    { metric: 'Броски по воротам', value: 75, max: 100 },
    { metric: 'Блокированные броски', value: 82, max: 100 },
    { metric: 'Эффективность большинства', value: 45, max: 100 },
    { metric: 'Игра в меньшинстве', value: 88, max: 100 },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="relative py-20 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/30">
              <Icon name="BarChart3" className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Сезон 2024-2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Статистика</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Цифры и факты о выступлениях команды в текущем сезоне
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Общая статистика</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary transition-all hover:scale-105 animate-scale-in">
                <Icon name="ListChecks" className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-4xl font-bold text-foreground mb-2">{seasonStats.matches}</p>
                <p className="text-sm text-muted-foreground">Матчей сыграно</p>
              </div>

              <div className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: '0.05s' }}>
                <Icon name="TrendingUp" className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-4xl font-bold text-foreground mb-2">{seasonStats.wins}</p>
                <p className="text-sm text-muted-foreground">Побед</p>
              </div>

              <div className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <Icon name="Minus" className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-4xl font-bold text-foreground mb-2">{seasonStats.draws}</p>
                <p className="text-sm text-muted-foreground">Ничьи</p>
              </div>

              <div className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary transition-all hover:scale-105 animate-scale-in" style={{ animationDelay: '0.15s' }}>
                <Icon name="TrendingDown" className="w-8 h-8 text-destructive mx-auto mb-3" />
                <p className="text-4xl font-bold text-foreground mb-2">{seasonStats.losses}</p>
                <p className="text-sm text-muted-foreground">Поражений</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-card rounded-xl p-8 border border-border hover:border-primary transition-all hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon name="Target" className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-foreground">{seasonStats.goalsFor}</p>
                    <p className="text-sm text-muted-foreground">Забито голов</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border hover:border-primary transition-all hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center">
                    <Icon name="Shield" className="w-8 h-8 text-destructive" />
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-foreground">{seasonStats.goalsAgainst}</p>
                    <p className="text-sm text-muted-foreground">Пропущено голов</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border hover:border-primary transition-all hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                    <Icon name="Star" className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-foreground">{seasonStats.points}</p>
                    <p className="text-sm text-muted-foreground">Очков набрано</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Топ бомбардиры</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-background rounded-xl overflow-hidden border border-border">
                <div className="grid grid-cols-6 gap-4 p-4 bg-muted font-semibold text-sm text-muted-foreground">
                  <div className="text-center">#</div>
                  <div className="col-span-2">Игрок</div>
                  <div className="text-center">Голы</div>
                  <div className="text-center">Передачи</div>
                  <div className="text-center">Очки</div>
                </div>

                {topScorers.map((player, index) => (
                  <div 
                    key={index}
                    className="grid grid-cols-6 gap-4 p-4 border-t border-border hover:bg-muted/50 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold">
                        {player.rank}
                      </span>
                    </div>
                    <div className="col-span-2 font-semibold text-foreground">{player.name}</div>
                    <div className="text-center text-foreground">{player.goals}</div>
                    <div className="text-center text-foreground">{player.assists}</div>
                    <div className="text-center font-bold text-primary">{player.total}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Последние матчи</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {recentMatches.map((match, index) => (
                <div 
                  key={index}
                  className={`bg-card rounded-xl p-6 border-2 transition-all hover:scale-102 animate-slide-in ${
                    match.result === 'win' ? 'border-primary/50 hover:border-primary' : 
                    match.result === 'draw' ? 'border-accent/50 hover:border-accent' : 
                    'border-destructive/50 hover:border-destructive'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        match.result === 'win' ? 'bg-primary/20' : 
                        match.result === 'draw' ? 'bg-accent/20' : 
                        'bg-destructive/20'
                      }`}>
                        <Icon 
                          name={match.result === 'win' ? 'CheckCircle2' : match.result === 'draw' ? 'Circle' : 'XCircle'} 
                          className={`w-6 h-6 ${
                            match.result === 'win' ? 'text-primary' : 
                            match.result === 'draw' ? 'text-accent' : 
                            'text-destructive'
                          }`}
                        />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{match.date}</p>
                        <p className="text-lg font-bold text-foreground">{match.opponent}</p>
                        <p className="text-xs text-muted-foreground">{match.location}</p>
                      </div>
                    </div>
                    <div className="text-center md:text-right">
                      <p className="text-3xl font-bold text-foreground">{match.score}</p>
                      <p className={`text-sm font-semibold uppercase ${
                        match.result === 'win' ? 'text-primary' : 
                        match.result === 'draw' ? 'text-accent' : 
                        'text-destructive'
                      }`}>
                        {match.result === 'win' ? 'Победа' : match.result === 'draw' ? 'Ничья' : 'Поражение'}
                      </p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Командные показатели</h2>
              <div className="w-20 h-1 bg-primary"></div>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {teamComparison.map((item, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-foreground font-semibold">{item.metric}</span>
                    <span className="text-primary font-bold">{item.value}%</span>
                  </div>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 rounded-full"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Stats;
