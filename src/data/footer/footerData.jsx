
import React from "react";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export const footerNav = [
  {
    category: "Need Help",
    links: [
      { id: 1, title: "Contact Us", url: "/#" },
      { id: 2, title: "Track Order", url: "/#" },
      { id: 3, title: "Returns & Refunds", url: "/#" },
      { id: 4, title: "FAQ's", url: "/#" },
      { id: 5, title: "Career", url: "/#" },
    ],
  },
  {
    category: "Company",
    links: [
      { id: 1, title: "About Us", url: "/#" },
      { id: 2, title: "euphoria Blog", url: "/#" },
      { id: 3, title: "euphoriastan", url: "/#" },
      { id: 4, title: "Collaboration", url: "/#" },
      { id: 5, title: "Media", url: "/#" },
    ],
  },
  {
    category: "More Info",
    links: [
      { id: 1, title: "Term and Conditions", url: "/#" },
      { id: 2, title: "Privacy Policy", url: "/#" },
      { id: 3, title: "Shipping Policy", url: "/#" },
      { id: 4, title: "Sitemap", url: "/#" },
    ],
  },
  {
    category: "Location",
    links: [
      { id: 1, title: "support@euphoria.in" },
      { id: 2, title: "Eklingpura Chouraha, Ahmedabad Main Road" },
      {
        id: 3,
        title: "(NH 8- Near Mahadev Hotel) Udaipur, India- 313002",
      },
    ],
  },
];

export const footerSocials = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "/#",
  },
  {
    id: 2,
    icon: <FaInstagram />,
    link: "/#",
  },
  {
    id: 3,
    icon: <FaTwitter />,
    link: "/#",
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
    link: "/#",
  },
];


export const footerCategories = [
  { id: 1, name: "category 1", link: "" },
  { id: 2, name: "category 2", link: "" },
  { id: 3, name: "category 3", link: "" },
  { id: 4, name: "category 4", link: "" },
];
