const resourcesData = [
  {
    title: "Simplicidade",
    img: "/images/logos/simple.png",
    alt: "Simple",
    text: "Interface simples e intuitiva, desenvolvida para que qualquer pessoa possa operar o sistema com rapidez, sem necessidade de treinamento técnico.",
  },
  {
    title: "Controle",
    img: "/images/logos/manager.png",
    alt: "Manager",
    text: "Gerencie produtos com códigos de barras, quantidades, preços e imagens. Receba alertas de estoque baixo.",
  },
  {
    title: "Desempenho",
    img: "/images/logos/develop.png",
    alt: "Development",
    text: "Acompanhe o desempenho do seu negócio com relatórios completos de vendas, produtos mais vendidos, formas de pagamento.",
  },
];

const about = [
  {
    title: "O que é o Vende Agora?",
    text: "O Sistema PDV (Ponto de Venda) foi criado para modernizar e simplificar a gestão de vendas em pequenos e médios negócios, respondendo à realidade local de estabelecimentos que precisam de eficiência sem complexidade técnica."
  },
  {
    title: 'Missão',
    text: "Desenvolver uma solução intuitiva, acessível e robusta para o comércio, que permita o controlo de vendas, gestão de produtos, relatórios e operações de caixa com facilidade."
  },
  {
    title: "Visão",
    text: "Ser uma referência em sistemas de ponto de venda em Moçambique e outros países africanos, oferecendo tecnologia que fortaleça o pequeno empreendedor e promova o crescimento sustentável dos negócios locais."
  }
];


const contact = {
  tel: "+258 834-681-798",
  email: "fpscomerce@gmail.com",
  linkedin_img: "/images/linkedin.svg",
  whatsapp_img: "/images/whatsapp.svg",
  x_img: "/images/x.svg",
  img: "/images/contact-img.png",
  whatsapp: "https://wa.me/258847455300?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20pdv.",
  linkedin: "https://www.linkedin.com/in/fabiao-chirindza-mainato/",
  x: "https://x.com/MainatoFabiao"
};

const report = [
  {
    text: "'Desde que começámos a usar este sistema, as nossas vendas ficaram muito mais organizadas. O controlo de estoque e os relatórios em PDF são uma mais-valia para o nosso negócio.'",
    author: "- Júlio Macano, Dono de Mercearia em Matola"
  },
  {
    text: "'O sistema é rápido, fácil de usar e muito completo. Já testei outros programas de fora, mas este é o que mais se adapta à nossa realidade no mercado.'",
    author: "- Armando Nhantumbo, comerciante em Maputo"
  },
  {
    text: "'A parte do fecho de caixa automático e os gráficos mensais ajudaram-me a perceber melhor o desempenho do meu negócio. Recomendo vivamente!'",
    author: "- Esmeralda Mucavele, Vendedora de roupas da Shein em Maputo"
  },
];

const title = {
    about: "Sobre o Vende Agora",
    resources: "Principais Recursos",
    report: "Acompanhe Alguns Relatos",
    contact: "Fale Conosco",
    pricing: "Planos Flexiveis para Cada Necessidade"
};

const social =[
  {
    imgPath: "/images/linkedin_blue.svg",
    alt: "LinkedIn",
    url: "https://www.linkedin.com/in/fabiao-chirindza-mainato/"
  },
  {
    imgPath: "/images/whatsapp_blue.svg",
    alt: "Whatsapp",
    url: "https://wa.me/258847455300?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20sistema%20pdv."
  },
  {
    imgPath: "/images/x_blue.svg",
    alt: "X",
    url: "https://x.com/MainatoFabiao"
  }
];

const pricingPlans = [
  {
    nome: "Grátis",
    preco: "0 MT/mês",
    destaque: false,
    descricao: "Ideal para pequenos negócios que desejam experimentar um sistema de ponto de venda simples e funcional.",
    beneficios: [
      "Até 50 registros por mês",
      "Sem Relatório",
      "Uso com logo próprio",
      "Recursos básicos de venda"
    ],
    botao: "Começar Agora"
  },
  {
    nome: "Pro",
    preco: "500 MT/mês",
    destaque: true,
    descricao: "Perfeito para negócios em crescimento que precisam de mais capacidade e funcionalidades avançadas.",
    beneficios: [
      "Até 200 registros por mês",
      "Automação de processos",
      "Relatórios de vendas",
      "Suporte prioritário"
    ],
    botao: "Escolher Plano Pro"
  },
  {
    nome: "Premium",
    preco: "1.000 MT/mês",
    destaque: false,
    descricao: "Plano completo para empresas que exigem controle total das operações, equipe e performance financeira.",
    beneficios: [
      "Registros Ilimitados por mês",
      "Múltiplos usuários",
      "Relatórios financeiros detalhados",
      "Integrações avançadas"
    ],
    botao: "Contactar Vendas"
  }
];

export default {
  resourcesData,
  about,
  contact,
  report,
  title,
  social,
  pricingPlans
};