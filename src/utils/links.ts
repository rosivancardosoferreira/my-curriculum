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
    link: "mailto: rosivancardoso767@gmail.com"
  },
  WhatsApp: {
    text: "(92) 99345-8416",
    link: "https://wa.me/5592993458416"
  }
};

export const ListContacts = [
  {
    icon: Icons.Github,
    contact: MyLinks.Github
  },
  {
    icon: Icons.Linkedin,
    contact: MyLinks.Linkedin
  },
  {
    icon: Icons.Email,
    contact: MyLinks.Email,
    useText: true
  },
  {
    icon: Icons.WhatsApp,
    contact: MyLinks.WhatsApp,
    useText: true
  }
];
