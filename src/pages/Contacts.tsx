import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: 'MapPin',
      title: 'Адрес',
      details: ['Ледовый Дворец «Спартак»', 'ул. Хоккейная, 15', 'Москва, 119991'],
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      details: ['+7 (495) 123-45-67', '+7 (495) 123-45-68', 'Пн-Пт: 9:00 - 18:00'],
    },
    {
      icon: 'Mail',
      title: 'Email',
      details: ['info@veles-hockey.ru', 'press@veles-hockey.ru', 'Ответим в течение 24 часов'],
    },
  ];

  const socialLinks = [
    { icon: 'Instagram', name: 'Instagram', url: '#', handle: '@veles_hockey' },
    { icon: 'Facebook', name: 'Facebook', url: '#', handle: 'VelesHockey' },
    { icon: 'Twitter', name: 'Twitter', url: '#', handle: '@veles_rekjhl' },
    { icon: 'Youtube', name: 'YouTube', url: '#', handle: 'VelesHockeyTV' },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20">
        <section className="relative py-20 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-primary/30">
              <Icon name="MessageCircle" className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Связаться</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Контакты</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами по любым вопросам — мы всегда на связи
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 text-center border border-border hover:border-primary transition-all hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={info.icon as any} className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Отправьте нам сообщение</h2>
                <div className="w-20 h-1 bg-primary mb-8"></div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                      placeholder="Иван Иванов"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                        placeholder="your@email.ru"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Тема обращения *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    >
                      <option value="">Выберите тему</option>
                      <option value="partnership">Партнерство</option>
                      <option value="sponsorship">Спонсорство</option>
                      <option value="press">Для прессы</option>
                      <option value="tickets">Билеты на матч</option>
                      <option value="tryout">Просмотр в команду</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Сообщение *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                      placeholder="Расскажите подробнее о вашем вопросе..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Отправить сообщение
                    <Icon name="Send" className="w-5 h-5" />
                  </button>
                </form>
              </div>

              <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Мы в соцсетях</h3>
                  <div className="w-20 h-1 bg-primary mb-6"></div>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all hover:scale-105 group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon name={social.icon as any} className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{social.name}</p>
                            <p className="text-sm text-muted-foreground">{social.handle}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-card rounded-xl p-8 border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Как нас найти</h3>
                  <div className="aspect-video bg-muted rounded-lg mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon name="Map" className="w-16 h-16 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Icon name="Navigation" className="w-5 h-5 text-primary mt-1" />
                      <p className="text-muted-foreground">
                        5 минут пешком от метро "Спортивная"
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Car" className="w-5 h-5 text-primary mt-1" />
                      <p className="text-muted-foreground">
                        Парковка для гостей доступна
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Clock" className="w-5 h-5 text-primary mt-1" />
                      <p className="text-muted-foreground">
                        Офис работает: Пн-Пт 9:00-18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Icon name="HelpCircle" className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Часто задаваемые вопросы</h2>
              <div className="space-y-4 mt-8 text-left">
                <details className="bg-background rounded-lg p-6 border border-border group">
                  <summary className="font-semibold text-foreground cursor-pointer flex items-center justify-between">
                    Как купить билет на матч?
                    <Icon name="ChevronDown" className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-muted-foreground mt-4">
                    Билеты можно приобрести на нашем сайте, в кассах арены или через партнерские сервисы продажи билетов.
                  </p>
                </details>

                <details className="bg-background rounded-lg p-6 border border-border group">
                  <summary className="font-semibold text-foreground cursor-pointer flex items-center justify-between">
                    Можно ли пройти просмотр в команду?
                    <Icon name="ChevronDown" className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-muted-foreground mt-4">
                    Да, мы регулярно проводим просмотры. Свяжитесь с нами через форму обратной связи, указав тему "Просмотр в команду".
                  </p>
                </details>

                <details className="bg-background rounded-lg p-6 border border-border group">
                  <summary className="font-semibold text-foreground cursor-pointer flex items-center justify-between">
                    Где проходят домашние матчи?
                    <Icon name="ChevronDown" className="w-5 h-5 text-muted-foreground group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-muted-foreground mt-4">
                    Все домашние матчи проходят в Ледовом Дворце «Спартак» по адресу: ул. Хоккейная, 15, Москва.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
