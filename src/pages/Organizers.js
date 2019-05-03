import React from 'react';

// Components
import Modal from '../components/Modal';

// Helpers
import Title from '../helpers/Title';
import Card from '../helpers/Card';

// Fotos
import ian from '../assets/images/organizadores/2019/Ian.jpg'
import lucas from '../assets/images/organizadores/2019/Lucas.jpg'
import gabriel from '../assets/images/organizadores/2019/Gabriel.jpg'
import pedro from '../assets/images/organizadores/2019/Pedro.jpg'

// Fotos Regional
import jairo from '../assets/images/organizadores/2019/JairoDublin.jpg'
import jose from '../assets/images/organizadores/2019/JoseSaoLuis.jpg'
import erick from '../assets/images/organizadores/2019/ErickPalmas.jpg'
import danielAracaju from '../assets/images/organizadores/2019/DanielAracaju.jpg'
import khelson from '../assets/images/organizadores/2019/KhelsonBelem.jpg'
import pamela from '../assets/images/organizadores/2019/PamelaCuritiba.jpg'
import danilo from '../assets/images/organizadores/2019/DaniloTeresina.jpg'
import gustavo from '../assets/images/organizadores/2019/GustavoGoiania.jpg'
import danielRecife from '../assets/images/organizadores/2019/DanielRecife.jpg'
import caio from '../assets/images/organizadores/2019/CaioUberaba.jpg'
import felipe from '../assets/images/organizadores/2019/FelipePatosDeMinas.jpg'
import narto from '../assets/images/organizadores/2019/NartoNatal.jpg'
import helen from '../assets/images/organizadores/2019/HelenRondonia.jpg'
import lucasBrasilia from '../assets/images/organizadores/2019/LucasBrasilia.jpg'
import gabrielAndradeBrasilia from '../assets/images/organizadores/2019/GabrielAndradeBrasilia.jpg'
import isaacBrasilia from '../assets/images/organizadores/2019/IsaacBrasilia.jpg'
import gabrielMotaBrasilia from '../assets/images/organizadores/2019/GabrielMotaBrasilia.jpg'
import guilhermeBrasilia from '../assets/images/organizadores/2019/GuilhermeBrasilia.jpg'
import rodrigoBrasilia from '../assets/images/organizadores/2019/RodrigoBrasilia.jpg'
import filipeCaruaru from '../assets/images/organizadores/2019/FilipeCaruaru.jpg'
import arisonFortaleza from '../assets/images/organizadores/2019/ArisonFortaleza.jpg'
import italoFortaleza from '../assets/images/organizadores/2019/ItaloFortaleza.jpg'
import anayaSaoCarlos from '../assets/images/organizadores/2019/AnayaSaoCarlos.jpg'
import kidManaus from '../assets/images/organizadores/2019/KidManaus.jpg'
import carlosManaus from '../assets/images/organizadores/2019/CarlosManaus.jpg'
import johnManaus from '../assets/images/organizadores/2019/JohnManaus.jpg'
import hugoPorto from '../assets/images/organizadores/2019/HugoPorto.jpg'
import ronica from '../assets/images/organizadores/2019/Ronica.jpg'
import miguelLaPaz from '../assets/images/organizadores/2019/MiguelLaPaz.png'

//Fotos Regional 2018
import pedrozambon from '../assets/images/organizadores/2018/pedro.jpg'
import larissa from '../assets/images/organizadores/2018/larissa.jpg'
import guilherme from '../assets/images/organizadores/2018/guilherme.jpg'
import marcello from '../assets/images/organizadores/2018/marcello.jpg'
import arison from '../assets/images/organizadores/2018/arison.jpg'
import tiago from '../assets/images/organizadores/2018/tiago.jpg'
import harry from '../assets/images/organizadores/2018/harry.jpg'

export default class Organizers extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            modal: {
                nome: "",
                cidade: "",
                texto: "",
                foto: ""
            },
            pt: {
                geral: "Organização Global",
                regional: "Organização Regional"
            },
            en: {
                geral: "Global Organizers",
                regional: "Regional Organizers"
            },
            atual: {
                geral: [
                    {
                        nome: "Ian Rochlin",
                        pt: "Idealizador da GJ+ e coordenador da segunda edição em 2017 e terceira em 2018. Com 3 anos de experiência no marketing da Procter & Gamble.",
                        en: "Idealizer of GJ + and coordinator of the second edition in 2017 and third in 2018. With 3 years of experience in the marketing of Procter & Gamble.",
                        foto: ian
                    }, {
                        nome: "Lucas Pessoa",
                        pt: "Atual Gerente de Relacionamento e Eventos da Gamer Trials e Organizador nacional da Game Jam +, maior movimento colaborativo de fomento a indústria local de jogos da America Latina. Graduado em Estudos de Mídia, com três anos de game studies e trabalhando com jogos voltados para educação dentro de universidades, seguidos de dois anos de design de narrativas e game design como primeiro contato com o mercado. O que permeou tudo isso foi a organização e produção de eventos de jogos, acadêmicos ou voltados ao mercado, que acabou por resultar na Game Jam+, maior maratona de desenvolvimento de jogos da America Latina.",
                        en: "Gamer Trials Relationship and Event Manager and national organizer or Game Jam +, Latin America's largest collaborative fostering program for the local gaming industry. Media Studies undergrad, working with educational games and game studies within the university for three years, followed by two years as game designer and narrative designer working directly in the local industry. During all that time, organizing game related events, academics or market driven, lead me to organizing Game Jam+, the largest game developing marathon in Latin America.",
                        foto: lucas
                    }, {
                        nome: "Gabriel Ferreira",
                        pt: "Gabriel Ferreira é gerente de comunidade e responsável pelo marketing da Gamer Trials desde 2017. Apaixonado pela ideia de criar comunidades engajadas e sadias, vem trabalhando em diversos projetos na área de jogos: é um dos representantes do coletivo RING, representante do Unity User Group no Rio de Janeiro e moderador do grupo Indie Game MKT, dentre outras iniciativas. Publicitário formado e pós-graduado em marketing, Gabriel procura utilizar seus conhecimentos para ajudar a indústria a crescer de maneira saudável.",
                        en: `Gabriel Ferreira is our community manager and the one responsible for Gamer Trial's Marketing since 2017. Driven to the idea of creating healthy and engaged communities, Gabriel has been working in many projects in the game industry: he's one of the representatives and organizers of the RING Colective, a Unity User Group organizer in Rio de Janeiro and the moderator of the group "Indie Game MKT", and many more. Graduated in advertising and a marketing post-graduate, Gabriel is always looking for ways to help the developer community grow in a healthy way.`,
                        foto: gabriel
                    }, {
                        nome: "Pedro Teixeira",
                        pt: "Pedro Teixeira atualmente é um dos organizadores nacionais da Game Jam Plus e já desenvolveu produtos nas áreas de gestão de comunidade e experiência do usuário na Startup Gamer Trials. Fomenta a comunidade de devs brasileira com o canal do Discord Game Designers BR e participação no coletivo de devs do RJ, o RING. Também desenvolve jogos digitais, sendo um deles selecionado para o programa Startup Rio 2019.",
                        en: "Pedro Teixeira is currently one of the national organizers of Game Jam Plus and has already developed products in the areas of community management and user experience in Startup Gamer Trials. It promotes the Brazilian devs community with the Discord Game Designers BR channel and participation in the RJ devs collective, RING. Also, it develops digital games, being one of them selected for the program Startup Rio 2019.",
                        foto: pedro
                    }
                ],
                regional: [
                    {
                        nome: "Jairo Lopes",
                        cidade: "Dublin",
                        pt: "Nascido em Minas Gerais, Jairo Lopes que hoje mora em Dublin, Irlanda é CEO e Diretor de Negócios da Nocht Communications, uma empresa que fornece serviços de Desenvolvimento de Negócios, Relações Públicas e Marketing para a Indústria de Jogos. Jairo começou sua carreira em 2014 como desenvolvedor e logo se encontrou em negócios e comunicação, onde desde então tem trabalhado em vários jogos como Madcap Castle, Eliosis Hunt, LazerGrrl, PSG Football Freestyle e outros. Por causa de seu apego e entusiasmo por comunidades, foi um dos idealizadores do evento BH Game Biz no Brasil e a The Games Co-Op em Dublin. Também participou da criação da GAMING (Associação Mineira de Jogos), onde foi responsável pela assessoria de imprensa. Jairo também escreve sobre marketing e negócios para o site Industria de Jogos.",
                        en: "Jairo Lopes was born in Brazil and is currently living in Dublin. He is the CEO and Business Director of Nocht Communications, a company that provides Business Development, Public Relations and Marketing services for the Games Industry. Jairo started his career as a developer and shortly found himself doing business and communications. Since then, he has worked on multiple games such as Madcap Castle, Eliosi's Hunt, LazerGrrl, PSG Football Freestyle and many others. Because of his indie-community side, he has always been present, organising events as BH Game Biz and The Games Co-OP and also participating of the foundation of the Game Association in Minas Gerais (GAMING) which he was also the responsible for press communications. Jairo also writes about marketing and business subjects for Industria de Jogos.",
                        foto: jairo
                    }, {
                        nome: "Ronica Singh",
                        cidade: "Durban",
                        pt: 'I wanted to go into the field of Astronomy and Electronics, but Computer Science chose me.  Studied correspondently and graduated with a BSc degree in Computer Science and Information Systems with University of South Africa (UNISA) in 2014, while working full time.  Web development caught my interest and still continue to do so.  While working as a IT lecturer for a short time of 2 years, I found that teaching others about web development and game development is something I truly want to do.  Currently in the process of starting my online training system under the name of "LearnWebAnim".  Occasionally a Career/Student advisor. I have developed a few games over the years, some for the JS13Kgames.com competition.  I follow many of the local game competitions and now recently the game jams.  I like not just making games but also teaching to make games, both developing and design of games.',
                        en: 'I wanted to go into the field of Astronomy and Electronics, but Computer Science chose me.  Studied correspondently and graduated with a BSc degree in Computer Science and Information Systems with University of South Africa (UNISA) in 2014, while working full time.  Web development caught my interest and still continue to do so.  While working as a IT lecturer for a short time of 2 years, I found that teaching others about web development and game development is something I truly want to do.  Currently in the process of starting my online training system under the name of "LearnWebAnim".  Occasionally a Career/Student advisor. I have developed a few games over the years, some for the JS13Kgames.com competition.  I follow many of the local game competitions and now recently the game jams.  I like not just making games but also teaching to make games, both developing and design of games.',
                        foto: ronica
                    }, {
                        nome: "Hugo",
                        cidade: "Porto",
                        pt: "Natural de Vila do Conde, Hugo vai coordenar a organização da Game Jam+ Porto, ele já tem uma vasta experiência em coodenação de game jams, visto ser o organizador de uma das mais consagradas game jams Portuguesas, a MAD Game Jam. Fora disto Hugo tem um curso superior em Design de Jogos e Animação Digital.",
                        en: "Natural de Vila do Conde, Hugo vai coordenar a organização da Game Jam+ Porto, ele já tem uma vasta experiência em coodenação de game jams, visto ser o organizador de uma das mais consagradas game jams Portuguesas, a MAD Game Jam. Fora disto Hugo tem um curso superior em Design de Jogos e Animação Digital.",
                        foto: hugoPorto
                    }, {
                        nome: "Miguel Velasco",
                        cidade: "La Paz",
                        pt: "Miguel Velasco is a graphic designer and visual communicator from La Paz, Bolivia, specialized in UI and UX. He has worked in the video game industry since 2012, he's founder of the Untamed Fox Studio in which the last years has focused his career to the game and experiences design. The 2019 has been co-organizer of the Global Game Jam - La Paz, Bolivia. Now works as a Creative Director at VReality company and is part of the board of the ABV, Asociación Boliviana de Videojuegos (Bolivian Videogames Association) as a International Relations and Coordination.",
                        en: "Miguel Velasco is a graphic designer and visual communicator from La Paz, Bolivia, specialized in UI and UX. He has worked in the video game industry since 2012, he's founder of the Untamed Fox Studio in which the last years has focused his career to the game and experiences design. The 2019 has been co-organizer of the Global Game Jam - La Paz, Bolivia. Now works as a Creative Director at VReality company and is part of the board of the ABV, Asociación Boliviana de Videojuegos (Bolivian Videogames Association) as a International Relations and Coordination.",
                        foto: miguelLaPaz
                    }, {
                        nome: "José Nunes",
                        cidade: "São Luís",
                        pt: "Bacharel em Ciência da Computação pela Universidade Federal do Maranhão, entrou no curso pela paixão em desenvolver jogos eletrônicos. Ainda na graduação, atuou como produtor de jogos no estúdio Whalesoft Entertainment. Em 2013, co-fundou a Zogui Game Studio, empresa em que trabalhou com serious games, advergames e gamificação. É um dos membros fundadores e Diretor de Relações Institucionais da Associação Maranhense de Desenvolvedores de Jogos Eletrônicos - AMAGames. Atualmente, é sócio e produtor na Ops! Game Studio, empresa em que desenvolve jogos voltados a outros negócios (b2b).",
                        en: "Bachelor in Computer Science from the Federal University of Maranhão, chose the course for his passion in developing games. During the course, he was game producer in the studio Whalesoft Entertainment. In 2013, he co-founded Zogui Game Studio, a company that worked with serious games, advergames and gamification. He is a co-founding member and currently Director of Institutional Relations of the Electronic Games Developers Association of Maranhão - AMAGames. Nowadays, he is partner and game producer on Ops! Game Studio, a company who develop games focused to other businesses (b2b).",
                        foto: jose
                    }, {
                        nome: "Erick Henrique",
                        cidade: "Palmas",
                        pt: "Mestre em educação, pesquisador na área de aprendizagem mediada por games e intergeracionalidade na UMA/UFT. Game Designer e produtor, especialista em produção de software pela UFLA/MG. Coordenador de projetos de inovação tecnológica e educacional, atuando em clubes de game design, aplicativos, robótica, audiovisual e realidade virtual baseados em educação criativa. Coorganizador da Global Game Jam 2019, em Palmas, Tocantins. Pesquisador no Grupo de Tecnologias Educacionais do IFTO, campus Paraíso, e do Laboratório de Recursos Didáticos e Tecnológicos do curso de Pedagogia da UFT, grupo de Aprendizagem Criativa em Tocantins. Idealizador, Diretor, produtor e animador no estúdio Gedja3D. Analista de TI na Seduc-TO. Organizador da BlenderPro 2013 na UFT.",
                        en: "Master in education, researcher in the area of learning mediated by games and intergenerationality in UMA / UFT. Game Designer and producer, specialist in software production by UFLA / MG. Coordinator of technological and educational innovation projects, working in game design clubs, applications, robotics, audiovisual and virtual reality based on creative education. Co-organizer of Global Game Jam 2019, in Palmas, Tocantins. Researcher at the Educational Technologies Group of the IFTO, Paraíso campus, and the Laboratory of Didactic and Technological Resources of the Pedagogy course at UFT, Creative Learning group in Tocantins. Idealizer, Director, Producer and Animator in Studio Gedja3D. IT Analyst at Seduc-TO. BlenderPro 2013 organizer at UFT.",
                        foto: erick
                    }, {
                        nome: "Daniel Caldas",
                        cidade: "Aracaju",
                        pt: "Sou formado pela Universidade Tiradentes (UNIT, Brasil) onde me graduei em Publicidade & Propaganda, focando meus estudos em Estratégia Criativa e Branding. Também estudei na Escola de Jornalismo e Comunicação (SOJC) na Universidade da Oregon (UofO) como um bolsista Fullbright. Na Zeca , comecei em 2014 como Estrategista de Marcas logo depois que voltei dos EUA, em 2016, fui convidado a voltar a trabalhar com eles como o Head de Inteligência Estratégica da agência, liderando uma equipe de incríveis Estrategistas, assim como me tornei um dos membros do Conselho da empresa. Em 2015, fundei minha primeira start-up, o 99lab e através da união de profissionais e através da capacitação de mentes que podem contribuir de alguma forma para o desenvolvimento de projetos relacionados à jogos.",
                        en: "I attended Tiradentes University (UNIT, Brazil) where I majored in Advertising, focusing in Creative Strategy and Branding. I also studied at the School of Journalism and Communication (SOJC) at the University of Oregon (UofO) as a Fullbright scholar. At Zeca, I started in 2014 as a Brand Strategist right after I got back from the US and, in 2016, I got back to work with them as the Head of Brand Strategy of the agency, leading a team of incredible Strategists as well as being a member of the agency's board. In 2015, I started my own start-up, the 99lab. The goal is to develop the game industry through uniting professionals and through the capacitation of minds that can contribute someway to the development of gaming related projects.",
                        foto: danielAracaju
                    }, {
                        nome: "Khelson Farias",
                        cidade: "Belém",
                        pt: "Autônomo na área de games a 7 anos como Modelador 3D, Programador, Game Designer. Desenvolvedor de games na Unity Engine. Atualmente trabalhando em soluções interativas e gameficação para empresas, assim como em games autorais para PC e Mobile.",
                        en: "Independent 3d artist, programer and game designer. Unity Engine Game Developer. Work in interactive gaming solutions for companies, as well as in original games for PC and Mobile.",
                        foto: khelson
                    }, {
                        nome: "Pâmela Beltrani",
                        cidade: "Curitiba",
                        pt: 'Atualmente é professora do curso de Tecnologia em Jogos Digitais da Universidade Positivo. É mestre em Ciência da Computação com a defesa do trabalho "Predição de Movimento em Jogos Distribuídos Baseada em Aprendizado de Máquina"(2015) pela Universidade Federal do Paraná na área de Jogos Digitais com enfoque de aplicação de Aprendizado de Máquina em Sistemas Distribuídos. É especialista em Desenvolvimento de Jogos Digitais (2015) pela Pontifícia Universidade Católica do Paraná e graduada em Bacharelado em Ciência da Computação pela Pontifícia Universidade Católica do Paraná (2012).',
                        en: `She is currently a lecturer in the Digital Games Technology course at Positivo University. She is master in Computer Science in "Prediction of Movement in Distributed Games Based on Machine Learning" (2015) by the Federal University of Paraná in the area of Digital Games with focus of application of Machine Learning in Distributed Systems. She is a specialist in Digital Games Development (2015) from the Pontifical Catholic University of Paraná and has a Bachelor's degree in Computer Science from the Pontifical Catholic University of Paraná (2012).`,
                        foto: pamela
                    }, {
                        nome: "Danilo Carvalho",
                        cidade: "Teresina",
                        pt: "Bacharel em ciência da computação pela Universidade Federal do Piauí - UFPI, especialista em Engenharia de Software pelo Centro de Ensino Unificado de Teresina - Estácio|CEUT. É desenvolvedor certificado pela Unity3D, analista de sistemas da Secretaria de Fazenda - SEFAZ PI, foi professor do curso de programação de jogos com Unity3D pelo Instituto Interaje e trabalha com desenvolvimento de jogos eletrônicos de forma autônoma desde 2013 auxiliando no desenvolvimento de projetos como The Last Nightmary - A Lenda do Cabeça de Cuia, Metodological e Econsciência Energética.",
                        en: "Bachelor of Computer Science from federal university of Piauí - UFPI, specialist in Software Engineering from Estácio|CEUT. Unity Certified Developer, System Analyst at SEFAZ-PI, taught the course of game programming with Unity3D. Works with game development since on projects such as The Last Nightmary - A Lenda do Cabeça de Cuia, Metodological e Econsciência Energética.",
                        foto: danilo
                    }, {
                        nome: "Gustavo Christino",
                        cidade: "Goiânia",
                        pt: "Gustavo Christino, formado em Engenharia de Computação pela Universidade Federal de Goiás. Atua como organizador de eventos na área de jogos digitais e não digitais em Goiânia. Atua como Game Designer, Roteirista, Produtor, Programador, Organizador de Eventos e Mestre de RPG.",
                        en: "Gustavo Christino, graduated in Computer Engineering from the Federal University of Goiás. He acts as event organizer in the area of digital and non-digital games in Goiânia. Acts as Game Designer, Writer, Producer, Programmer, Event Organizer and RPG Master.",
                        foto: gustavo
                    }, {
                        nome: "Daniel Martins",
                        cidade: "Recife",
                        pt: "Daniel Martins é ludólogo, designer educacional e pesquisador. Mestrando em Neurodesign pela CESAR School, pós-graduado em Design Estratégico pela ESPM e graduado em Desenho Industrial - Comunicação Visual pela UNESA. Ao longo dos mais de 12 anos de experiência profissional, já atuou como gerente de projetos, diretor de criação, game designer, designer gráfico, professor, palestrante, além de ter auxiliando na criação de cursos de design e desenvolvimento de games em vários estados, para instituições como Senai, Escola SESC de Ensino Médio, Senac, Unigranrio, entre outros. Pelo CESAR, já foi professor de Cultura de Jogos e Metodologias de Projeto no NAVE Rio, e hoje atua como coordenador pedagógico de Multimídia na Escola Técnica Estadual Cícero Dias - NAVE em Recife. Além disso é dono de duas empresas: D+1 Design e Jogos, onde presta consultoria e produz experiências de ensino ludocentricas; e a DMand Game Studio, onde desenvolve seus próprios jogos analógicos para entretenimento. E-mail: dsm@cesar.org.br",
                        en: "Daniel Martins is a ludologist, educational designer and researcher. Mastering in Neurodesign at CESAR School, postgraduate in Strategic Design by ESPM and graduated in Industrial Design - Visual Communication by UNESA. Throughout more than 12 years of professional experience, has worked as a project manager, creative director, game designer, graphic designer, teacher, speaker, besides helping to create game design and development courses in several brazilian states, for institutions such as Senai, SESC High School, Senac, Unigranrio, among others. Working at CESAR, was formerly teacher of disciplines such as Game Culture and Project Methodologies in NAVE Rio, and today works as Multimedia pedagogical coordinator at Cícero Dias State Technical School - NAVE in Recife. In addition, he owns two companies: D+1 Design and Games, where he provides consulting and produces ludocentric teaching experiences; and DMand Game Studio, where it develops its own analog games for entertainment. E-mail: dsm@cesar.org.br",
                        foto: danielRecife
                    }, {
                        nome: "Caio Melo",
                        cidade: "Uberaba",
                        pt: "GRADUANDO EM TECNOLOGIA EM JOGOS DIGITAIS NA UNIVERSIDADE DE UBERABA, INICIOU O CURSO MESCLANDO A PAIXÃO POR GAMES COM A VONTADE DE INOVAR E MELHORAR O DESENVOLVIMENTO DE JOGOS. EX-JOGADOR PROFISSIONAL DE CARD GAMES, BUSCA AGORA ADQUIRIR CADA VEZ MAIS CONHECIMENTOS PARA CRIAÇÕES DE NOVOS JOGOS E GAMIFICAÇÕES. GAME DESIGNER, ROTEIRISTA, ASPIRANTE EM PIXELART E COM ALGUMAS EXPERIENCIAS EM EVENTOS DE CRIAÇÃO DE JOGOS, PRETENDE FOMENTAR A INDUSTRIA E COMUNIDADE DE GAMES DA REGIÃO.",
                        en: "GRADUATING IN TECHNOLOGY IN DIGITAL GAMES AT THE UNIVERSITY OF UBERABA, HE STARTED THE COURSE MESSAGING THE PASSION BY GAMES WITH THE WILL TO INNOVATE AND IMPROVE THE DEVELOPMENT OF GAMES. PROFESSIONAL PLAYER OF CARD GAMES, NOW LOOKING TO ACQUIRE YET MORE KNOWLEDGE FOR CREATING NEW GAMES AND GAMES. GAME DESIGNER, ROTEIRISTA, ASPIRANTE IN PIXELART AND WITH SOME EXPERIENCES IN GAME CREATION EVENTS, INTENDS TO PROMOTE THE GAMES INDUSTRY AND COMMUNITY OF THE REGION.",
                        foto: caio
                    }, {
                        nome: "Felipe Alvarenga",
                        cidade: "Patos de Minas",
                        pt: "Felipe Alvarenga, 26 anos, é publicitário e se especializou na promoção de eventos voltados à cultura nerd no interior de Minas Gerais. Com outros dois amigos criou o NerdProject em 2012, e desde então vem realizando atividades em Patos de Minas sobre as várias áreas do universo nerd. Com a Maratona NerdProject, evento realizado sempre no inicio do ano, e vários outros eventos menores ao decorrer do ano, vem cumprindo o objetivo de divulgar o universo nerd, quebrar preconceitos, empoderar e divulgar os criadores de conteúdo, mostrar os benefícios pessoais e educacionais dos jogos e criar oportunidades para jovens empreendedores que gostariam de transformar seus hobbies em trabalho.",
                        en: "",
                        foto: felipe
                    }, {
                        nome: "Narto Júnior",
                        cidade: "Natal",
                        pt: "Natural de São Paulo (SP), porém residente em Natal (RN), possui graduação em Tecnologia em Análise e Desenvolvimento de Sistemas pelo Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (2011); Especialização em Design e Desenvolvimento de Jogos Digitais (2015). Tem experiência na área de Tecnologia da Informação, com ênfase em programação C#; Desenvolvimento e produção de jogos digitais, com ênfase em Game Design e Produção. Se interessa pelos estudos de desenvolvimento de jogos digitais, computação gráfica, boas práticas de programação, linguagens de programação, gerência de projetos, arte e áudio para jogos digitais. Cofundador do Bit.Byte (2014) que se transformou em PONG - Potiguar Indie Games (2015) que é formado por encontros da comunidade de desenvolvedores de jogos do RN - atuando como organizador, Organizador Regional Norte e Nordeste do Brasil da Global Game Jam (2016), Organizador Local de Natal da Global Game Jam (2014), Organizador Regional Natal - Game Jam Plus (2018), entre outras atividades na área. Já foi professor em curso de Graduação em Jogos Digitais e professor em curso técnico de Jogos Digitais.",
                        en: "Natural of São Paulo (SP), but resident in Natal (RN), has a degree in Technology in Analysis and Systems Development by the Federal Institute of Education, Science and Technology of Rio Grande do Norte (2011); Specialization in Design and Development of Digital Games (2015). Has experience in Information Technology, with emphasis on C # programming; Development and production of digital games, with emphasis on Game Design and Production. He is interested in studies of digital game development, computer graphics, good programming practices, programming languages, project management, art and audio for digital games. Co-founder of Bit.Byte (2014) that became PONG - Potiguar Indie Games (2015), which is formed by meetings of the community of game developers of the RN - acting as organizer, Regional Organizer North and Northeast Brazil of Global Game Jam 2016), Local Game Organizer of Global Game Jam (2014), Regional Organizer Natal - Game Jam Plus (2018), among other activities in the area. He has been a professor in the course of graduation in Digital Games and professor in the technical course of Digital Games.",
                        foto: narto
                    }, {
                        nome: "Hélen Cristina",
                        cidade: "Rondônia",
                        pt: "Hélen Oliveira é administradora, empresária e atual gerente da regional de Porto Velho do Sebrae/RO - Serviço de Apoio às Micro e Pequenas Empresas de Rondônia. Possui MBA em Gestão de Projetos pela FGV - Fundação Getúlio Vargas, Especializações em Gestão de Processos Gerenciais, Especialização em Docência e Bacharelado em Administração de Empresas. Tem experiência na área de Administração, com ênfase em Administração de Empresas, atuando principalmente nos seguintes temas: Central de Atendimento e Relacionamento com o Cliente, Processos de Ensino-Aprendizagem, Gestão Estratégica, Atendimento Digital e presencial e Modelo de Excelência da Gestão®.",
                        en: "",
                        foto: helen
                    }, {
                        nome: "Lucas Caldeira",
                        cidade: "Brasília",
                        pt: "Lucas Caldeira é sócio fundador da Mad Pixel, se especializando nas áreas de arte, animação, roteiro e game feel. Ama desenhar, jogar video-games, música e histórias assustadoras. Pode ser encontrado no Instagram em @_eli.ge .",
                        en: "Lucas Caldeira is a founding partner at Mad Pixel, specializing in art, animation, storytelling and game feel. Loves drawing, playing vydia, music and spoooooky stories, Can be found on Instagram, at @_eli.ge .",
                        foto: lucasBrasilia
                    }, {
                        nome: "Gabriel Andrade",
                        cidade: "Brasília",
                        pt: "Gabriel Andrade é sócio fundador e Game Designer na Mad Pixel e participou da criação dos jogos vencedores das Jam Nerd Festivals 2014 e 2016, Kolks Game Jam 2015, Teen Balada Brasília 2017 e Game Jam + Brasília 2018. Foi estudante de ciência da computação e, atualmente, cursa administração de empresas pela Universidade de Brasília. Gabriel, como todos os outros integrantes da Mad, tem proficiências diversas que se complementam para a criação de um jogo. É músico, programador, designer, artista e malabarista nas horas vagas.",
                        en: "Gabriel Andrade is a founding partner and Game Designer at Mad Pixel. He participated in the creation of the winning games of Jam Nerd Festivals 2014 and 2016, Kolks Game Jam 2015, Teen Balada Brasília 2017 and Game Jam + Brasília 2018. Has minors in computer science and, currently attends business administration at the University of Brasília. Gabriel, like all other Mad Pixel members, has diverse proficiencies that complement each other to create games. He is a musician, programmer, designer, artist and juggler in his spare time.",
                        foto: gabrielAndradeBrasilia
                    }, {
                        nome: "Isaac Lopes",
                        cidade: "Brasília",
                        pt: "Sócio fundador e Lead Programmer na Mad Pixel Studios, flautista mágico.",
                        en: "Founding partner and Lead Programmer at Mad Pixel Studios, magical flutist.",
                        foto: isaacBrasilia
                    }, {
                        nome: "Gabriel Mota",
                        cidade: "Brasília",
                        pt: 'Gabriel Mota é programador e músico na empresa Mad Pixel. Atualmente cursando o último semestre de Engenharia de Computação na Universidade de Brasília, Mota sempre teve interesse por música e acabou entrando no mundo de desenvolvimento de jogos na área de programação por conta do seu curso, e hoje esta é sua área de atuação principal. Já foi palestrante na Campus Party Brasília 2 com o tema: "Game Design: Game Feel e Polimento".',
                        en: 'Gabriel Mota is a programmer and sound designer for Mad Pixel. Currently in the last semester of Computing Engineering course at University of Brasília, Mota always had interest in music and ended up in game development as a programmer because of college, area which is currently his main occupation. Mota also was a panelist in Campus Party Brasília 2 with the theme: "Game Design: Game Feel and Polishment".',
                        foto: gabrielMotaBrasilia
                    }, {
                        nome: "Guilherme Okita",
                        cidade: "Brasília",
                        pt: "Guilherme Okita é programador pela Mad Pixel. Formado em Ciência da Computação pela Universidade de Brasília. A partir do interesse pela arte para jogos e resolução de problemas, começou a trabalhar na Mad Pixel como artista e depois mudou para a área de programação para focar nas habilidades que obteve durante o curso da universidade.",
                        en: "Guilherme Okita is a programmer at Mad Pixel. Received B.S. in Computer Science at Universidade de Brasília. From the interest in art and problem solving, started as an artist in Mad Pixel and then shifted to programming to better use the skills learned in the university course.",
                        foto: guilhermeBrasilia
                    }, {
                        nome: "Rodrigo Maia",
                        cidade: "Brasília",
                        pt: "Rodrigo Maia trabalha como Artista e Animador na empresa Mad Pixel. Graduando no curso de Audiovisual na Universidade de Brasília participou de diversas produções de média tradicional, entretanto se especializou na área de animação e arte digital, ingressando na comunidade de desenvolvimento de jogos brasiliense em 2015. ",
                        en: "Rodrigo Maia works as an Artist and Animator at Mad Pixel. Graduating in the Audiovisual course at the University of Brasilia, he participated in several traditional media productions, but specialized in animation and digital art, joining the brazilian gaming development community in 2015.",
                        foto: rodrigoBrasilia
                    }, {
                        nome: "Filipe Rafael",
                        cidade: "Caruaru",
                        pt: "Empreendedor apaixonado por novos negócios e especialmente na área de games. Já empreendeu em diversas áreas ligadas a tecnologia e desde 2015 atua no mercado de games como CEO/gerente de projetos da Mantus Studio, startup com ênfase em desenvolvimento de games e serious games, aplicações imersivas e lúdicas em realidade virtual e aumentada. Pai de um bebezão chamado Theo, futuro gamer e jammer. Com intuito de promover e fomentar a potencialidade do segmento, já organizou sete games jams na cidade de Caruaru - Pernambuco onde reside atualmente.",
                        en: "Entrepreneur in love with new business, specially in games. He has already undertaken in several technology related areas and since 2015 acts in game market as CEO / project manager of Mantus Studio, startup with emphasis on game development, serious games and immersive and playful applications in virtual and augmented reality. Filipe is father of a baby called Theo, future gamer and jammer. In order to promote and foster the potential of the segment, already has organized seven game jams in Caruaru, city of Pernambuco, where he currently resides.",
                        foto: filipeCaruaru
                    }, {
                        nome: "Arison Heltami",
                        cidade: "Fortaleza",
                        pt: "Arison Heltami é Sócio e Game Designer da Taverna Game Studio de Fortaleza, Diretor Executivo da Associação Cearense de Desenvolvedores de Jogos (ASCENDE Jogos) e Graduando do curso de Sistemas e Mídias Digitais da Universidade Federal do Ceará. Como Dev, projeta jogos com foco em subverter propostas de mecânicas e experiências tradicionais. Como Aluno, realiza pesquisas no campo da Psicologia e Sociologia Aplicadas à Jogos e Análise do Desenvolvimento da Cadeia Produtiva Local. Na ASCENDE Jogos, desenvolve as relações institucionais da Associação e auxilia na proposição de ações e políticas públicas para o ecossistema local.",
                        en: "",
                        foto: arisonFortaleza
                    }, {
                        nome: "Italo Furtado",
                        cidade: "Fortaleza",
                        pt: "Ilustrador, Quadrinista, Animador e Desenvolvedor de Jogos Digitais e Analógicos há 9anos. Já trabalhou com clientes de peso como o Governo do Estado do Ceará, Banco doNordeste do Brasil, PB Kid, Ri Happy e O POVO. Atua principalmente como Designer deInteração e é envolvido no fomento ao cenário de desenvolvimento de jogos no estado doCeará. Iniciou os trabalhos de jogos integrando o cargo de Artista Sênior e depois Diretor deArte na primeira empresa do Estado do Ceará a ser constituída em seu CNPJ comoempresa de Jogos: Fan Studios. Hoje empreende com outros colegas na Me ‘n U e naAgência Digital, Maestros. É Presidente da Associação Cearense de Desenvolvedores deJogos (ASCENDE Jogos) e do Capítulo Fortaleza da International Game DevelopersAssociation (IGDA Fortaleza)",
                        en: "",
                        foto: italoFortaleza
                    }, {
                        nome: "Anayã Ferreira",
                        cidade: "São Carlos",
                        pt: "Anayã Ferreira, jogadora desde sempre, game dev desde 2013. Estudante de Ciências da Computação na USP de São Carlos, já participou de diversas Game Jams e projetos de jogos, incluindo alguns que foram premiados. Hoje tem seu estúdio, a Batatando Games, onde busca desenvolver experiências interessantes e divertidas.",
                        en: "Anayã Ferreira, gamer since ever, game dev since 2013. Computer Science student at USP-São Carlos, has already participated in many game jams and projects, some of those awarded. Today is one of the founders of Batatando Games, a studio aiming to create meaningful and fun experiences to its players.",
                        foto: anayaSaoCarlos
                    }, {
                        nome: "Kid Mendes",
                        cidade: "Manaus",
                        pt: "Graduando em Sistemas de Informação pela Universidade do Estado do Amazonas, possui mais de dois anos de experiência com desenvolvimento na área de jogos, já trabalhou em projetos envolvendo Realidade Aumentada, Realidade Virtual e a integração de modelos de Inteligência Artificial em jogos. Atualmente compõe o time técnico do Samsung Ocean Center em Manaus, como desenvolvedor na área de Jogos Digitais.",
                        en: "Graduating in Information Systems at the State University of Amazonas, he has more than two years of games experience, has worked on projects involving Augmented Reality, Virtual Reality and the integration of Artificial Intelligence models in games. He currently composes the technical team of the Samsung Ocean Center in Manaus, as a developer in the area of Digital Games.",
                        foto: kidManaus
                    }, {
                        nome: "Carlos Tapudima",
                        cidade: "Manaus",
                        pt: "Sou um Acadêmico de Sistemas de Informação na Universiadade Estadual do Amazonas, formado Técnico em Informática pelo Instituto Federal do Amazonas. Já tive experiência com as linguagens Python, Delphi, Java, JavaScript, C e C++. Atualmente realizo a manutenção de um jogo educativo utilizado em sala de aula pelos cursos de Medicina, Farmácia e Enfermagem na Universidade Estadual do Amazonas.",
                        en: "I am an academic in the Information Systems course from the Amazon State University and a Computer Techniciann graduated by Amazon State Federal Institute. In regards of programming languages I have  knowledge and experience in python, delphi, java,javascript  c and c++. Currently I'm giving support to an educational game mostly used on class rooms by the state university of amazon, in the Pharmacy, Medicine and Nursing courses.",
                        foto: carlosManaus
                    }, {
                        nome: "Jonh Silva",
                        cidade: "Manaus",
                        pt: "Designer com 5 anos de experiência, participa de projetos de desenvolvimento de jogos e aplicativos móveis, além de trabalhos de ilustração e animação digital no Samsung Ocean. Formação em Design Gráfico, Especialista em Desenvolvimento de Jogos Digitais pela - Universidade do Estado do Amazonas (UEA) e Mestre em Design de Artefatos digitais pelo C.E.S.A.R.",
                        en: "Designer with 5 years of experience, participates in games development projects and mobile applications, as well as digital animation and illustration projects at Samsung Ocean. Training in Graphic Design, Specialist in Development of Digital Games by - University of the State of Amazonas (UEA) and Master in Digital Artifacts Design by C.E.S.A.R.",
                        foto: johnManaus
                    }
                ]
            },
            passado: {
                geral: [
                    {
                        nome: "Ian Rochlin",
                        foto: ian
                    }, {
                        nome: "Lucas Pessoa",
                        foto: lucas
                    }, {
                        nome: "Gabriel Ferreira",
                        foto: gabriel
                    }
                ],
                regional: [
                    {
                        nome: "Pedro Zambon",
                        cidade: "São Paulo",
                        foto: pedrozambon
                    }, {
                        nome: "Larissa Rios",
                        cidade: "Brasília",
                        foto: larissa
                    }, {
                        nome: "Guilherme Oliveira",
                        cidade: "Brasília",
                        foto: guilherme
                    }, {
                        nome: "Pâmela Beltrani",
                        cidade: "Curitiba",
                        foto: pamela
                    }, {
                        nome: "Marcello Lima",
                        cidade: "Florianópolis",
                        foto: marcello
                    }, {
                        nome: "Daniel Caldas",
                        cidade: "Aracaju",
                        foto: danielAracaju
                    }, {
                        nome: "Khelson Farias",
                        cidade: "Belém",
                        foto: khelson
                    }, {
                        nome: "Arison Heltami",
                        cidade: "Fortaleza",
                        foto: arison
                    }, {
                        nome: "Tiago Fernando",
                        cidade: "Natal",
                        foto: tiago
                    }, {
                        nome: "José Nunes",
                        cidade: "São Luís",
                        foto: jose
                    }, {
                        nome: "Danilo Carvalho",
                        cidade: "Teresina",
                        foto: danilo
                    }, {
                        nome: "Harry Florencio",
                        cidade: "Recife",
                        foto: harry
                    }, {
                        nome: "Felipe Alvarenga",
                        cidade: "Patos de Minas",
                        foto: felipe
                    }
                ]
            }
        }
        this.closeModal = this.closeModal.bind(this)
    }
    componentWillUpdate = () =>  {
        window.scrollTo(0,0);
    }

    language(){
        const controle = localStorage.getItem('lingua');
        const lang = navigator.language;

        if(controle === undefined){
            if(lang === 'pt-BR' || lang === 'pt'){
                return this.state.pt;
            } else {
                return this.state.en;        
            }
        } else {
            if(controle === 'pt'){
                return this.state.pt;
            } else {
                return this.state.en;        
            }
        }
    }

    isPt(){
        const controle = localStorage.getItem('lingua');
        const lang = navigator.language;

        if(controle === undefined){
            if(lang === 'pt-BR' || lang === 'pt'){
                return true;
            } else {
                return false;        
            }
        } else {
            if(controle === 'pt'){
                return true;
            } else {
                return false;        
            }
        }
    }

    getYear(){
        const url = window.location.search.replace("?", "");
        
        if (url === "2019") {
            return this.state.atual
        } else if (url === "2018") {
            return this.state.passado
        } else {
            return this.state.atual

        }
    }

    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    closeModal = () => {
        this.setState({
            isOpen: false
         });
    }

    newMethod() {
        return this;
    }

    infoModal(props) {
        const cit = props.modal.cidade === undefined ? undefined : props.modal.cidade
        this.setState({
            isOpen: !this.state.isOpen,
            modal: {
                nome: props.modal.nome,
                texto: props.modal.texto,
                foto: props.modal.foto,
                cidade: cit
            }
        });
    }

    render(){
        const evento = this.getYear();
        return(
            <main>
                <section className="organizers container">
                    <Title titulo={this.language().geral} subtitulo="Game Jam +" />
                    <div className="organizersContainer" >
                        {evento.geral.map(
                            item => {
                                return  (
                                    <Card
                                        modal={window.location.search.replace("?", "") === "2019" ? () => {
                                            const lang = navigator.language;
                                            let texto
                                            if(lang === 'pt-BR' || lang === 'pt'){
                                                texto = item.pt
                                            } else {
                                                texto = item.en    
                                            }
                                            this.infoModal({modal: {
                                                nome: item.nome,
                                                texto: texto,
                                                foto: item.foto
                                            }});
                                        } : null}
                                        foto={item.foto}
                                        nome={item.nome}
                                        texto={this.isPt === true ? item.pt : item.en}
                                    />  
                                );
                            }
                        )}
                    </div>
                </section>
                <section className="organizers container">
                    <Title titulo={this.language().regional} subtitulo="Game Jam +" />
                    <div className="organizersContainer">
                        {evento.regional.map(
                            item => {
                                return  (
                                    <Card
                                        modal={window.location.search.replace("?", "") === "2019" ? () => {
                                            const lang = navigator.language;
                                            let texto
                                            if(lang === 'pt-BR' || lang === 'pt'){
                                                texto = item.pt
                                            } else {
                                                texto = item.en    
                                            }
                                            this.infoModal({modal: {
                                                nome: item.nome,
                                                texto: texto,
                                                foto: item.foto,
                                                cidade: item.cidade
                                            }});
                                        } : null}
                                        foto={item.foto}
                                        cidade={item.cidade}
                                        nome={item.nome}
                                        texto={this.isPt === true ? item.pt : item.en}
                                    />  );
                            }
                        )}
                    </div>
                </section>
                <Modal 
                    show={this.state.isOpen}
                    onClose={this.toggleModal}
                    closeModal={this.closeModal}
                    foto={this.state.modal.foto} 
                    nome={this.state.modal.nome} 
                    cidade={this.state.modal.cidade} 
                    texto={this.state.modal.texto} 
                />
            </main>
        );
    }
}