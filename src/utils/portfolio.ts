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
  {
    name: "Condu Consult",
    description: "Website para não sei ainda.",
    created: "03/2022",
    image: Images.CondoConsult,
    techs: [react, typescript, git, styled],
    link: "https://condo-consult-front.vercel.app/"
  },
  {
    name: "Seminário de Mobilidade Urbana",
    description:
      "Website para divulgação do evento de Mobilidade Urbana de Itacoatiara.",
    created: "02/2022",
    image: Images.MobilidadeUrbana,
    techs: [react, typescript, git, styled],
    link: "https://mobilidadeurbanaita.com/"
  },
  {
    name: "Nova Energia",
    description: "Website para empresa de energia",
    created: "12/2021",
    image: Images.Novaenergia,
    techs: [react, git, css],
    link: "https://novaenergia.com.br"
  },
  {
    name: "MeuNovoCV",
    description: "Website para criação de currículos personalizados",
    created: "09/2021",
    image: Images.MeuNovoCV,
    techs: [react, typescript, git, styled],
    link: "https://app.meunovocv.com/"
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
