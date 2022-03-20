import { Icons } from "assets/icons";

export const MyLinks = {
  Github: {
    text: "github.com/rosivancardosoferreira",
    link: "https://github.com/rosivancardosoferreira"
  },
  Linkedin: {
    text: "linkedin.com/in/rosivan-cardoso-6673711b1",
    link: "https://www.linkedin.com/in/rosivan-cardoso-6673711b1/"
  },
  Email: {
    text: "rosivancardoso767@gmail.com",
    link: "rosivancardoso767@gmail.com"
  },
  WhatsApp: {
    text: "(92) 99345-8416",
    link: "https://wa.me/5592993458416"
  }
};

export const ListContacts = [
  {
    icon: Icons.Github,
    link: MyLinks.Github.link
  },
  {
    icon: Icons.Linkedin,
    link: MyLinks.Linkedin.link
  },
  {
    icon: Icons.Email,
    link: MyLinks.Email.link
  },
  {
    icon: Icons.WhatsApp,
    link: MyLinks.WhatsApp.link
  }
];
