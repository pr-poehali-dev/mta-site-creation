import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const topPlayers = [
    { name: "KavkazKing", score: 15420, level: 99 },
    { name: "DvizhMaster", score: 12350, level: 87 },
    { name: "CityRacer", score: 11890, level: 82 },
    { name: "StreetLegend", score: 10750, level: 78 },
    { name: "NightRider", score: 9520, level: 74 },
  ];

  return (
    <div className="min-h-screen bg-gaming-dark text-white relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/img/94599c30-6197-426a-ae62-dd780db868f6.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center space-x-4">
          <Icon name="Gamepad2" size={32} className="text-gaming-orange" />
          <h1 className="text-2xl font-orbitron font-bold text-gaming-orange">
            KAVKAZ|DVIZH STYLE ORIGINAL
          </h1>
        </div>
        <div className="flex space-x-4">
          <Button
            variant="outline"
            className="border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white transition-colors"
            onClick={() => setIsLoginOpen(!isLoginOpen)}
          >
            <Icon name="User" size={16} className="mr-2" />
            Войти
          </Button>
          <Button className="bg-gaming-orange hover:bg-gaming-orange/80 text-white font-semibold">
            <Icon name="Download" size={16} className="mr-2" />
            Скачать
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-20 px-6">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <h2 className="text-6xl font-orbitron font-black mb-6 bg-gradient-to-r from-gaming-orange to-gaming-blue bg-clip-text text-transparent">
            ДОБРО ПОЖАЛОВАТЬ
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Самый крутой сервер MTA в регионе! Уникальная экономика,
            реалистичная физика и безграничные возможности для игры.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-gaming-orange">
                247+
              </div>
              <div className="text-sm text-gray-400">Игроков онлайн</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-gaming-blue">
                24/7
              </div>
              <div className="text-sm text-gray-400">Работает без сбоев</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-orbitron font-bold text-gaming-orange">
                150+
              </div>
              <div className="text-sm text-gray-400">Транспорта</div>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-gaming-orange to-gaming-blue hover:animate-neon-pulse text-white font-semibold px-8 py-4 text-lg"
          >
            <Icon name="Play" size={20} className="mr-2" />
            НАЧАТЬ ИГРАТЬ
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Login/Register Form */}
          {isLoginOpen && (
            <div className="lg:col-span-1">
              <Card className="bg-black/50 border-gaming-orange/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="font-orbitron text-gaming-orange flex items-center">
                    <Icon name="User" size={20} className="mr-2" />
                    Авторизация
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Войдите в свой аккаунт или создайте новый
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 bg-gaming-dark border border-gaming-orange/20">
                      <TabsTrigger
                        value="login"
                        className="data-[state=active]:bg-gaming-orange"
                      >
                        Вход
                      </TabsTrigger>
                      <TabsTrigger
                        value="register"
                        className="data-[state=active]:bg-gaming-orange"
                      >
                        Регистрация
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="login" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="login-username">Логин</Label>
                        <Input
                          id="login-username"
                          placeholder="Введите логин"
                          className="bg-gaming-dark border-gaming-orange/30 focus:border-gaming-orange"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="login-password">Пароль</Label>
                        <Input
                          id="login-password"
                          type="password"
                          placeholder="Введите пароль"
                          className="bg-gaming-dark border-gaming-orange/30 focus:border-gaming-orange"
                        />
                      </div>
                      <Button className="w-full bg-gaming-orange hover:bg-gaming-orange/80">
                        Войти в игру
                      </Button>
                    </TabsContent>
                    <TabsContent value="register" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="reg-username">Логин</Label>
                        <Input
                          id="reg-username"
                          placeholder="Придумайте логин"
                          className="bg-gaming-dark border-gaming-orange/30 focus:border-gaming-orange"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reg-email">Email</Label>
                        <Input
                          id="reg-email"
                          type="email"
                          placeholder="Введите email"
                          className="bg-gaming-dark border-gaming-orange/30 focus:border-gaming-orange"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reg-password">Пароль</Label>
                        <Input
                          id="reg-password"
                          type="password"
                          placeholder="Придумайте пароль"
                          className="bg-gaming-dark border-gaming-orange/30 focus:border-gaming-orange"
                        />
                      </div>
                      <Button className="w-full bg-gaming-blue hover:bg-gaming-blue/80">
                        Создать аккаунт
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Server Info */}
          <div className={`${isLoginOpen ? "lg:col-span-1" : "lg:col-span-2"}`}>
            <Card className="bg-black/50 border-gaming-blue/30 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="font-orbitron text-gaming-blue flex items-center">
                  <Icon name="Server" size={20} className="mr-2" />О сервере
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Все что нужно знать о KAVKAZ|DVIZH
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gaming-dark/50 rounded border border-gaming-orange/20">
                    <Icon
                      name="Users"
                      size={24}
                      className="mx-auto mb-2 text-gaming-orange"
                    />
                    <div className="font-orbitron text-lg font-bold text-gaming-orange">
                      500+
                    </div>
                    <div className="text-sm text-gray-400">
                      Зарегистрировано
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gaming-dark/50 rounded border border-gaming-blue/20">
                    <Icon
                      name="Car"
                      size={24}
                      className="mx-auto mb-2 text-gaming-blue"
                    />
                    <div className="font-orbitron text-lg font-bold text-gaming-blue">
                      150+
                    </div>
                    <div className="text-sm text-gray-400">Автомобилей</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gaming-orange">
                    Особенности сервера:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="mr-2 text-gaming-orange"
                      />
                      Реалистичная экономика
                    </li>
                    <li className="flex items-center">
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="mr-2 text-gaming-orange"
                      />
                      Уникальные профессии
                    </li>
                    <li className="flex items-center">
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="mr-2 text-gaming-orange"
                      />
                      Система банд и кланов
                    </li>
                    <li className="flex items-center">
                      <Icon
                        name="CheckCircle"
                        size={16}
                        className="mr-2 text-gaming-orange"
                      />
                      Модифицированные авто
                    </li>
                  </ul>
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-gradient-to-r from-gaming-blue to-gaming-orange">
                    <Icon name="Download" size={16} className="mr-2" />
                    Скачать клиент MTA
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Player Rating */}
          <div className={`${isLoginOpen ? "lg:col-span-1" : "lg:col-span-1"}`}>
            <Card className="bg-black/50 border-gaming-orange/30 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="font-orbitron text-gaming-orange flex items-center">
                  <Icon name="Trophy" size={20} className="mr-2" />
                  Топ игроков
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Лучшие игроки сервера
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topPlayers.map((player, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gaming-dark/50 rounded border border-gaming-orange/20 hover:border-gaming-orange/40 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Badge
                          variant="outline"
                          className="border-gaming-orange text-gaming-orange"
                        >
                          #{index + 1}
                        </Badge>
                        <div>
                          <div className="font-semibold">{player.name}</div>
                          <div className="text-xs text-gray-400">
                            Уровень {player.level}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-orbitron font-bold text-gaming-orange">
                          {player.score.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-400">очков</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-gaming-orange/20 to-gaming-blue/20 rounded border border-gaming-orange/30">
                  <div className="text-sm font-semibold mb-2">Ваш прогресс</div>
                  <Progress value={65} className="mb-2" />
                  <div className="text-xs text-gray-400">
                    До следующего уровня: 350 XP
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Action Bar */}
        <div className="mt-12 text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <Button
              variant="outline"
              className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white"
            >
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Форум
            </Button>
            <Button
              variant="outline"
              className="border-gaming-orange text-gaming-orange hover:bg-gaming-orange hover:text-white"
            >
              <Icon name="CreditCard" size={16} className="mr-2" />
              Донат
            </Button>
            <Button
              variant="outline"
              className="border-gaming-blue text-gaming-blue hover:bg-gaming-blue hover:text-white"
            >
              <Icon name="HelpCircle" size={16} className="mr-2" />
              Правила
            </Button>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>IP: play.kavkaz-dvizh.ru | Порт: 22003</p>
            <p className="mt-2">
              © 2024 KAVKAZ|DVIZH STYLE ORIGINAL. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
