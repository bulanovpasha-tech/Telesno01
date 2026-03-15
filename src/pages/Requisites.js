import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Requisites = () => {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen bg-[#F9F5EF] py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl font-light tracking-widest text-[#0F2A24] mb-10 uppercase">
          {language === 'ru' ? 'Реквизиты' : 'Legal Information'}
        </h1>

        <div className="bg-white rounded-lg p-8 shadow-sm space-y-5 text-sm text-[#0F2A24]/80 leading-relaxed">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <span className="text-[#0F2A24]/50 font-medium">
              {language === 'ru' ? 'Наименование' : 'Name'}
            </span>
            <span>
              {language === 'ru'
                ? 'Студия массажа «ТЕЛЕСНО»'
                : 'Massage studio "TELESNO"'}
            </span>

            <span className="text-[#0F2A24]/50 font-medium">
              {language === 'ru' ? 'Статус' : 'Status'}
            </span>
            <span>
              {language === 'ru'
                ? 'Самозанятый (плательщик НПД)'
                : 'Self-employed (professional income tax)'}
            </span>

            <span className="text-[#0F2A24]/50 font-medium">ФИО</span>
            <span>
              {/* Замените на реальное ФИО */}
              Буланов Павел Александрович
            </span>

            <span className="text-[#0F2A24]/50 font-medium">ИНН</span>
            <span className="font-mono">
              {/* Замените 344810153006 на реальный ИНН */}
              344810153006
            </span>

            <span className="text-[#0F2A24]/50 font-medium">
              {language === 'ru' ? 'Телефон' : 'Phone'}
            </span>
            <span>
              <a
                href="tel:+79964835556"
                className="hover:text-[#C6A75E] transition-colors"
              >
                +7 (996) 483-55-56
              </a>
            </span>

            <span className="text-[#0F2A24]/50 font-medium">
              {language === 'ru' ? 'Адрес' : 'Address'}
            </span>
            <span>
              {language === 'ru'
                ? 'г. Волгоград, ул. Рабоче-Крестьянская, д. 35'
                : 'Volgograd, Raboche-Krestyanskaya St., 35'}
            </span>

            <span className="text-[#0F2A24]/50 font-medium">
              {language === 'ru' ? 'Режим работы' : 'Working hours'}
            </span>
            <span>
              {language === 'ru' ? '10:00 — 20:00 ежедневно' : '10:00 — 20:00 daily'}
            </span>
          </div>

          <div className="pt-4 border-t border-[#C6A75E]/20 text-xs text-[#0F2A24]/40">
            {language === 'ru'
              ? 'Оплата производится через сервис ЮKassa. Чек направляется на e-mail или телефон покупателя.'
              : 'Payment is processed via YooKassa. A receipt is sent to the buyer\'s email or phone.'}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Requisites;
