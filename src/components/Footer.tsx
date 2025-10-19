import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Zap" className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">ВЕЛЕС</h3>
                <p className="text-xs text-muted-foreground">REKJHL Сезон 5</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Хоккейная команда с непревзойденным духом победы и страстью к игре
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Навигация</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Главная</a></li>
              <li><a href="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">Команда</a></li>
              <li><a href="/achievements" className="text-sm text-muted-foreground hover:text-primary transition-colors">Достижения</a></li>
              <li><a href="/stats" className="text-sm text-muted-foreground hover:text-primary transition-colors">Статистика</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">veles@rekjhl.ru</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">+7 (495) 123-45-67</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                  <Icon name="Instagram" className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                  <Icon name="Facebook" className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                  <Icon name="Twitter" className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 ХК Велес REKJHL. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
