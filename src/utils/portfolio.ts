import { Images } from "assets/images";
// TECHS

const styled = {
  name: "styled-components",
  bgColor: "#E38782",
  color: "#010009",
  class: "styled"
};

const html = {
  name: "HTML",
  bgColor: "#E44D26",
  color: "#FFFFFF",
  class: ""
};

const css = {
  name: "CSS",
  bgColor: "#1572B6",
  color: "#FFFFFF",
  class: ""
};

const javascript = {
  name: "Javascript",
  bgColor: "#F0DB4F",
  color: "#010009",
  class: ""
};

const php = {
  name: "PHP",
  bgColor: "#777BB3",
  color: "#010009",
  class: ""
};

const react = {
  name: "React",
  bgColor: "#61DAFB",
  color: "#010009",
  class: ""
};

const git = {
  name: "Git",
  bgColor: "#F34F29",
  color: "#FFFFFF",
  class: ""
};

const typescript = {
  name: "Typescript",
  bgColor: "#007ACC",
  color: "#FFFFFF",
  class: ""
};

// IMAGENS

export const WebPortfolio = [
  // {
  //   name: "Condu Consult",
  //   description: "Website para empresa de gerenciamento de condomínios.",
  //   created: "03/2022",
  //   image: Images.CondoConsult,
  //   techs: [react, typescript, git, styled],
  //   link: "https://condo-consult-front.vercel.app/"
  // },
  {
    name: "Seminário de Mobilidade Urbana",
    description:
      "Website para divulgação do evento de Mobilidade Urbana de Itacoatiara.",
    created: "02/2022",
    image: Images.MobilidadeUrbana,
    techs: [react, typescript, styled, git],
    link: "https://mobilidadeurbanaita.com/"
  },
  {
    name: "Nova Energia",
    description: "Website para empresa de energia.",
    created: "12/2021",
    image: Images.Novaenergia,
    techs: [react, css, git],
    link: "https://novaenergia.com.br"
  },
  {
    name: "MeuNovoCV",
    description: "Website para criação de currículos personalizados.",
    created: "09/2021",
    image: Images.MeuNovoCV,
    techs: [react, typescript, styled, git],
    link: "https://app.meunovocv.com/"
  },
  {
    name: "Warehouse",
    description: "Sistema para gerenciamento de armazem.",
    created: "10/2020",
    image: Images.WarehouseSystem,
    techs: [react, typescript, styled, git]
  },
  {
    name: "Gerenciamento de OS",
    description: "Sistema para criação e controle de Ordem de Serviços.",
    created: "10/2020",
    image: Images.OS,
    techs: [react, typescript, styled]
  },
  {
    name: "Ritz & Silva",
    description: "Website para escritório de advocacia.",
    created: "10/2020",
    image: Images.RitzeSilva,
    techs: [html, css, javascript, php],
    link: "https://ritzesilva.com.br/"
  },
  {
    name: "Easy2Recruit",
    description: "Website para empresa de recrutamento e seleção.",
    created: "09/2020",
    image: Images.Easy2Recruit,
    techs: [html, css, javascript, php],
    link: "https://easy2recruit.com/"
  },
  {
    name: "Formulário SNCT ICET-UFAM",
    description: "Formulário para capitação e alocação atividades do evento.",
    created: "09/2020",
    image: Images.Formulario,
    techs: [html, css, javascript, php],
    link: "https://sncticet.ufam.edu.br/formulario/"
  },
  {
    name: "RenoveICET - Chapa 10",
    description: "Website para divulgação da cantidatura da Chapa 10.",
    created: "08/2020",
    image: Images.RenoveICET,
    techs: [react, typescript, git, styled],
    link: "https://ufam-icet-chapa10.vercel.app/",
    github: "#"
  }
];

export const MobilePortfolio = [
  {
    name: "Rent",
    description: "Ajustes em MVP de aplicativo para aluguel de veículos.",
    created: "05/2021",
    splash_image: Images.Rent.splash,
    home_image: Images.Rent.home,
    techs: [react, javascript, git, styled]
  },
  {
    name: "Protepi - Administrador",
    description:
      "Parte do administrador do aplicativo para venda de equipamentos de proteção individual.",
    created: "03/2021",
    splash_image: Images.ProtEpiAdmin.splash,
    home_image: Images.ProtEpiAdmin.home,
    techs: [react, typescript, git, styled]
  },
  {
    name: "Protepi - Cliente",
    description:
      "Aplicativo para venda de equipamentos de proteção individual.",
    created: "01/2021",
    splash_image: Images.ProtEpiClient.splash,
    home_image: Images.ProtEpiClient.home,
    techs: [react, typescript, git, styled]
  },
  {
    name: "MyHair",
    description: "Aplicativo para venda de cabelos e produtos de cabelo.",
    created: "10/2020",
    splash_image: Images.MyHair.splash,
    home_image: Images.MyHair.home,
    techs: [react, javascript, git, styled]
  }
];
