import React from "react";

const FullMenuModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuData = [
    {
      section: "Основное меню",
      items: [
        { name: "Икра (Осётр/ Лосось/ Щука)", price: "9900/2200/2200" },
        { name: "Устрица 3 шт. (лимонный «снег», сельдерей, яблочный уксус с луком-шалот)", price: "2900" },
        { name: "Морской ёж 1 шт (соевый соус, перепелиное яйцо)", price: "1100" },
        { name: "Плато «Fruits de Mer» на 2 -х (устрицы, морские ежи, гребешки, фаланги краба, тунец, лосось)", price: "15000/19500*", note: "*Alain Bailly Cuvee Petronille Brut" },
        { name: "Мурманский лосось (маринованная клубника, фенхель, сметанный соус со щавелем)", price: "1550" },
        { name: "Слабосолёный чир (икра щуки, мочёные яблоки, соус из солёных огурцов)", price: "1550" },
        { name: "Краб с гуакамоле (соус «Ментайко»)", price: "1950" },
        { name: "Сахалинский гребешок (сезонные фрукты, сорбет из малины, соус понзу из ревеня)", price: "2100" },
        { name: "Шарик из тунца и лангустинов (лайм, терияки, перуанская мята, соус с тапиокой)", price: "1300" }
      ]
    },
    {
      section: "МИНИ-ЗАКУСКИ",
      items: [
        { name: "Сыры российских фермеров (горгонзола с трюфелем, таледжио, комте, каре руж, конфитюр из инжира, мёд цветочный)", price: "2200" },
        { name: "Фондю из расплавленного сыра с вином (ростбиф, гребешки, татарская утка, молодой картофель, соления, овощное крудите)", price: "4500" },
        { name: "Сет мини закусок (пончик с осетровой/ лососевой икрой, тарталетка с тунцом и лососем, эклер с крабом)", price: "2600/2000" },
        { name: "Сало Белорусское (горчица, гренки)", price: "850" },
        { name: "Закуска a la Russe (солёные огурцы со сметаной и мёдом, маринованные томаты, форшмак из осетра, килька с соусом ремулад, вяленая оленина, утка)", price: "2400" },
        { name: "Закуска «Mediterranean» (тирокафтери, хумус из перца, оливки, жареный артишок, прошутто, сыр халуми, тосты с анчоусами )", price: "2750" },
        { name: "Сибирские грузди (сметана, лук)", price: "1150" }
      ]
    },
    {
      section: "ЗАКУСКИ",
      items: [
        { name: "Ремесленный хлеб мал/бол (тыквенный, гречишный, 5 злаков, «хрустики», крем чиз «печёная паприка», крем чиз «пряные травы»)", price: "300/500" },
        { name: "Запечённый камамбер (трюфель, шелковица, розмарин, кленовый сироп)", price: "1900" },
        { name: "Гравлакс из лосося (страчателла, мини-романо, маринованная клубника, томаты, икра лосося)", price: "2400" },
        { name: "Сугудай из муксуна (икра щуки, молодой картофель с укропом, настойка «Шмаковка»)", price: "2100" },
        { name: "Малосольная говядина «surf&turf» (ромейн, сливочный вурчестерский соус, трюфель, угорь)", price: "2500" },
        { name: "Тартар «Мимино» (говядина, аджика, гель из желтка, маринованная черемша и джонджоли)", price: "2100" },
        { name: "Тартар «FRENCHIE» (говядина, желток, горчица, эстрагон, трюфель, солёная фуагра)", price: "2500" }
      ]
    },
    {
      section: "САЛАТЫ",
      items: [
        { name: "«Много овощей» (гуакамоле, ассорти сезонных овощей, семечки, масло «TRAWA»)", price: "1500" },
        { name: "Салат «Дачный» (сладкие томаты, аджика из свеклы, свекольный лист, свежий огурец, эстрагон)", price: "990" },
        { name: "Буррата со спаржей (велюте из спаржи, молодой цукини, сладкие томаты, песто из черемши)", price: "1700" },
        { name: "Крабовый (малосольный огурец, яйцо, икра, сметанный соус с укропом)", price: "2450" },
        { name: "Мурманский гребешок (микс салатных листьев, тунец, хумус из болгарского перца, дрессинг из манго)", price: "2550" },
        { name: "Татарская утка с козьим сыром (сорбет из вишни, мизуна, запечённая свекла, кленово-горчичный дрессинг)", price: "1650" }
      ]
    },
    {
      section: "СУПЫ",
      items: [
        { name: "Борщ (утка конфи, вишня, сметана)", price: "1350" },
        { name: "Уха из осетра (овощи-нуазет, томаты, пончик с икрой щуки, Gastronom №4)", price: "1500" },
        { name: "Щавелевый (рулет из цыплёнка, перепелиное яйцо, печёный картофель)", price: "1300" },
        { name: "Бабушкин свекольник (тёплый картофель, песто из черемши, куриное яйцо)", price: "950" },
        { name: "Гаспачо (лангустины, огуречный сорбет, маринованные черри)", price: "1450" },
        { name: "Окрошка на квасе / мацони (говяжий язык, свежий огурец, редиска, куриное яйцо)", price: "1000" }
      ]
    },
    {
      section: "ГОРЯЧИЕ ЗАКУСКИ",
      items: [
        { name: "Зелёное ризотто с мурманским гребешком (шпинат, козий сыр, спаржа)", price: "1800" },
        { name: "Голубцы с крабом (свекольная ботва, жареные лангустины, соус биск)", price: "2600" },
        { name: "Пельмени с грибами (сезонные грибы, трюфель, сливочный грибной соус)", price: "1900" },
        { name: "Спаржа с улитками (молодой картофель, «хрустящее» перепелиное яйцо, соус сабайон с лаймом)", price: "1950" },
        { name: "Долма с олениной (мацони, свежий гранат, соус чимичури, пряный бульон из курицы)", price: "1900" }
      ]
    },
    {
      section: "ГОРЯЧИЕ БЛЮДА",
      subsections: [
        {
          title: "ОВОЩИ",
          items: [
            { name: "Летние овощи (сезонные овощи-соте, крем с лимоном, эстрагоном , базилик, лесной орех)", price: "1100" },
            { name: "Молодая запечённая свекла (крем из сыра горгонзола, овощной jus, трюфель, кедровый орех)", price: "1200" },
            { name: "Цукини в кляре (томатная сальса, эспума из козьего сыра, пармезан, горошек)", price: "1500" }
          ]
        },
        {
          title: "РЫБА",
          items: [
            { name: "Дорадо в соли (спаржа, мини-романо, соус Раита)", price: "4500" },
            { name: "Равиоли «Frutti di Mare» с осьминогом гриль (соус путтанеска, таджасские оливки, базилик)", price: "3250" },
            { name: "Угольная треска «Россини» (крем из фенхеля, шпинат, бриошь, фуа-гра, трюфельный jus со сморчками)", price: "3100" },
            { name: "Палтус (крем из горошка с мятой, паста scarpinocc с судаком, велюте из спаржи, миндальная пена)", price: "2500" },
            { name: "Котлета из щуки (картофельный драник, грибы, молодая кукуруза, соус с мидиями)", price: "2100" }
          ]
        },
        {
          title: "МЯСО/ПТИЦА",
          items: [
            { name: "Эскалоп из фуа-гра (яблочное пюре, свежие ягоды, соус с жареной смородиной)", price: "3100" },
            { name: "Филе оленя (крем из абрикосов, молодая морковь, запечённый кольраби, кедровая каша, соус с ликёром «Vana Tallinn»)", price: "3100" },
            { name: "Тальята из говядины (фуа-гра, цукини, трюфельный соус, крем со сморчками)", price: "3750" },
            { name: "Турнедо из ягнёнка (грибной дюксель, мини-романо, тахини, соус с чабрецом и мятой)", price: "2850" },
            { name: "Пожарская котлета (сезонные грибы, картофельный крем с хреном, соус с белыми грибами)", price: "1900" }
          ]
        }
      ]
    },
    {
      section: "ГРИЛЬ",
      items: [
        { name: "Рибай", price: "2700", note: "100 гр." },
        { name: "Филе миньон 250 г. (зерновой откорм)", price: "6500" },
        { name: "Корейка ягнёнка", price: "2500", note: "100 гр." },
        { name: "Брискет из говядины", price: "2150", note: "100 гр." },
        { name: "Копчёное свиное ребро", price: "1000", note: "100 гр." },
        { name: "Печень Карачаевского ягнёнка", price: "1350" },
        { name: "Шашлык из Романовского осётра", price: "4250" },
        { name: "Стейк из лосося", price: "2500" },
        { name: "Стейк из палтуса", price: "1350", note: "100 гр." },
        { name: "Соусы: говяжий соус с красным вином и трюфелем, перечный, йогурт с огурцами и мятой, путтанеско, грибной, белое вино", price: "750/400" }
      ]
    },
    {
      section: "ГАРНИР",
      items: [
        { name: "Фрикартошка (трюфель, соус «Пармезан»)", price: "850" },
        { name: "Картофельное пюре (зелень, пармезан)", price: "950" },
        { name: "Картофельное пюре с трюфелем (зелень, трюфельное масло)", price: "950" },
        { name: "Овощи гриль (баклажан, томат, цукини, перец сладкий, гуакамоле)", price: "1250" },
        { name: "Спаржа гриль/ на пару (соус ситронет)", price: "1350" }
      ]
    }
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '25px',
        maxWidth: '95vw',
        maxHeight: '95vh',
        overflow: 'auto',
        position: 'relative',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
        width: '100%'
      }}>
        {/* Кнопка закрытия */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '25px',
            right: '25px',
            background: 'rgba(201, 160, 99, 0.1)',
            border: 'none',
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            fontSize: '1.8rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#c9a063',
            zIndex: 2001,
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#c9a063';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'rgba(201, 160, 99, 0.1)';
            e.target.style.color = '#c9a063';
          }}
        >
          ×
        </button>

        <div style={{ padding: '60px 40px' }}>
          {/* Заголовок */}
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h1 style={{
              fontSize: '3rem',
              color: '#1a1a1a',
              marginBottom: '15px',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #c9a063 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Полное меню SAVVA
            </h1>
            <div style={{
              width: '100px',
              height: '4px',
              background: 'linear-gradient(135deg, #c9a063 0%, #d4af7a 100%)',
              margin: '0 auto 20px auto',
              borderRadius: '2px'
            }}></div>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              fontStyle: 'italic'
            }}>
              Изысканная кухня от шеф-повара Андрея Шмакова
            </p>
          </div>

          {/* Меню */}
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {menuData.map((section, sectionIndex) => (
              <div key={sectionIndex} style={{ marginBottom: '50px' }}>
                <h2 style={{
                  fontSize: '2.2rem',
                  color: '#c9a063',
                  marginBottom: '30px',
                  fontWeight: '700',
                  textAlign: 'center',
                  borderBottom: '2px solid #c9a063',
                  paddingBottom: '15px'
                }}>
                  {section.section}
                </h2>
                
                {section.subsections ? (
                  // Для разделов с подразделами (ГОРЯЧИЕ БЛЮДА)
                  <div>
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} style={{ marginBottom: '40px' }}>
                        <h3 style={{
                          fontSize: '1.5rem',
                          color: '#1a1a1a',
                          marginBottom: '20px',
                          fontWeight: '600',
                          textAlign: 'center'
                        }}>
                          {subsection.title}
                        </h3>
                        <div style={{
                          display: 'grid',
                          gap: '15px'
                        }}>
                          {subsection.items.map((item, itemIndex) => (
                            <div key={itemIndex} style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              padding: '15px 20px',
                              background: '#faf9f6',
                              borderRadius: '12px',
                              border: '1px solid rgba(201, 160, 99, 0.1)',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                              e.target.style.background = 'rgba(201, 160, 99, 0.05)';
                              e.target.style.transform = 'translateX(5px)';
                            }}
                            onMouseOut={(e) => {
                              e.target.style.background = '#faf9f6';
                              e.target.style.transform = 'translateX(0)';
                            }}>
                              <div style={{ flex: 1, marginRight: '20px' }}>
                                <div style={{
                                  fontSize: '1.1rem',
                                  color: '#1a1a1a',
                                  fontWeight: '500',
                                  lineHeight: '1.4'
                                }}>
                                  {item.name}
                                </div>
                                {item.note && (
                                  <div style={{
                                    fontSize: '0.9rem',
                                    color: '#c9a063',
                                    fontStyle: 'italic',
                                    marginTop: '5px'
                                  }}>
                                    {item.note}
                                  </div>
                                )}
                              </div>
                              <div style={{
                                fontSize: '1.1rem',
                                color: '#c9a063',
                                fontWeight: '700',
                                whiteSpace: 'nowrap'
                              }}>
                                {item.price} ₽
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Для обычных разделов
                  <div style={{
                    display: 'grid',
                    gap: '15px'
                  }}>
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        padding: '15px 20px',
                        background: '#faf9f6',
                        borderRadius: '12px',
                        border: '1px solid rgba(201, 160, 99, 0.1)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = 'rgba(201, 160, 99, 0.05)';
                        e.target.style.transform = 'translateX(5px)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = '#faf9f6';
                        e.target.style.transform = 'translateX(0)';
                      }}>
                        <div style={{ flex: 1, marginRight: '20px' }}>
                          <div style={{
                            fontSize: '1.1rem',
                            color: '#1a1a1a',
                            fontWeight: '500',
                            lineHeight: '1.4'
                          }}>
                            {item.name}
                          </div>
                          {item.note && (
                            <div style={{
                              fontSize: '0.9rem',
                              color: '#c9a063',
                              fontStyle: 'italic',
                              marginTop: '5px'
                            }}>
                              {item.note}
                            </div>
                          )}
                        </div>
                        <div style={{
                          fontSize: '1.1rem',
                          color: '#c9a063',
                          fontWeight: '700',
                          whiteSpace: 'nowrap'
                        }}>
                          {item.price} ₽
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Футер */}
          <div style={{
            textAlign: 'center',
            marginTop: '50px',
            padding: '30px',
            background: 'linear-gradient(135deg, #faf9f6 0%, #f5f3f0 100%)',
            borderRadius: '20px',
            border: '2px solid rgba(201, 160, 99, 0.1)'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              marginBottom: '20px'
            }}>
              * Цены указаны в рублях. Меню может меняться в зависимости от сезона.
            </p>
            <p style={{
              fontSize: '1rem',
              color: '#c9a063',
              fontWeight: '600'
            }}>
              🍷 Специальные предложения и винная карта доступны у официанта
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullMenuModal; 