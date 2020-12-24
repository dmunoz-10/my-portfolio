module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    author: `Daniel Muñoz`,
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-tailwindcss-demo.netlify.com/`,
    socialMedia: [
      { name: 'GitHub', url: 'https://github.com/dmunoz-10' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/djmv225/' },
    ],
    skills: [
      { name: 'HTML',        icon: 'devicon-html5-plain',       color: 'text-yellow-700', skill: 'Experienced' },
      { name: 'CSS',         icon: 'devicon-css3-plain',        color: 'text-blue-600',   skill: 'Experienced' },
      { name: 'Sass',        icon: 'devicon-sass-original',     color: 'text-pink-500',   skill: 'Experienced' },
      { name: 'JavaScript',  icon: 'devicon-javascript-plain',  color: 'text-yellow-400', skill: 'Experienced' },
      { name: 'Python',      icon: 'devicon-python-plain',      color: 'text-indigo-700', skill: 'Experienced' },
      { name: 'Ruby',        icon: 'devicon-ruby-plain',        color: 'text-red-600',    skill: 'Experienced' },
      { name: 'PHP',         icon: 'devicon-php-plain',         color: 'text-purple-400', skill: 'Skillful' },
      { name: 'Java',        icon: 'devicon-java-plain',        color: 'text-red-600',    skill: 'Experienced' },
      { name: 'React',       icon: 'devicon-react-original',    color: 'text-blue-600',   skill: 'Experienced' },
      { name: 'Gatsby',      icon: 'devicon-gatsby-plain',      color: 'text-purple-900', skill: 'Beginner' },
      { name: 'Vue',         icon: 'devicon-vuejs-plain',       color: 'text-green-600',  skill: 'Skillful' },
      { name: 'Rails',       icon: 'devicon-rails-plain',       color: 'text-red-800',    skill: 'Experienced' },
      { name: 'Django',      icon: 'devicon-django-plain',      color: 'text-green-800',  skill: 'Beginner' },
      { name: 'Django',      icon: 'devicon-django-plain',      color: 'text-green-800',  skill: 'Beginner' },
      { name: 'Laravel',     icon: 'devicon-laravel-plain',     color: 'text-red-600',    skill: 'Beginner' },
      { name: 'CodeIgniter', icon: 'devicon-codeigniter-plain', color: 'text-red-600',    skill: 'Skillful' },
      { name: 'Mysql',       icon: 'devicon-mysql-plain',       color: 'text-blue-800',   skill: 'Skillful' },
      { name: 'Postgresql',  icon: 'devicon-postgresql-plain',  color: 'text-indigo-700', skill: 'Skillful' },
      { name: 'MongoDB',     icon: 'devicon-mongodb-plain',     color: 'text-green-600',  skill: 'Beginner' },
      { name: 'Docker',      icon: 'devicon-docker-plain',      color: 'text-green-600',  skill: 'Skillful' },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
  ],
}
