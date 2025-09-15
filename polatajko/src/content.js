import React from 'react';

export const siteContent = {
  personal: {
    name: "Daniel Polatajko",
    tagline: "Independent AI Safety Research Engineer"
  },
  about: {
    title: "About",
    paragraphs: [
      <>I'm a budding AI safety researcher, pivoting from a 5 year career as a generalist engineer in climate tech. I care about solving problems that have widespread and unequitable impacts on humanity, and believe that technology is a great way to do this.</>,
      <>Outside of tech, I like climbing mountains, losing pub quizzes, and playing guitar in a folk-rock band called <a href="https://www.instagram.com/steeplekeeperband/" className="link">steeplekeeper</a>.</>
    ]
  },
  projects: {
    title: "Projects",
    items: [
      {
        title: "Inspect WandB",
        description: "An open-source integration between Inspect and Weights & Biases.",
        links: [
          {
            url: "https://github.com/DanielPolatajko/inspect_wandb",
            icon: "github",
            text: "GitHub"
          }
        ]
      },
      {
        title: "eval-crypt", 
        description: "An encryption/decryption Git hook, designed for encrypting sensitive evals code in Python projects.",
        links: [
          {
            url: "https://github.com/DanielPolatajko/eval-crypt",
            icon: "github", 
            text: "GitHub"
          },
          {
            url: "https://www.lesswrong.com/posts/KHfm4AZK8Pd4XTXGY/feedback-request-eval-crypt-a-simple-utility-to-mitigate",
            icon: "lesswrong",
            text: "LessWrong"
          }
        ]
      },
      {
        title: "Personal RAG Context",
        description: "A simple RAG application that stores things I've read online, and helps me to quickly remember details later.",
        links: [
          {
            url: "https://github.com/DanielPolatajko/personal-rag",
            icon: "github",
            text: "GitHub"
          }
        ]
      }
    ]
  },
  contact: {
    title: "Connect",
    links: [
      {
        text: "Email",
        url: "mailto:danielpolatajko@gmail.com"
      },
      {
        text: "GitHub",
        url: "https://github.com/DanielPolatajko"
      },
      {
        text: "LinkedIn", 
        url: "https://www.linkedin.com/in/daniel-polatajko/"
      }
    ]
  }
};