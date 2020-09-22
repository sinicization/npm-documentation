module.exports = {
  siteMetadata: {
    title: 'npm Docs',
    shortName: 'npm',
    description: 'Documentation for the npm registry, website, and command-line interface',
    editOnGitHub: false,
    showContributors: false,
    repo: {
      url: 'https://github.com/npm/documentation',
      defaultBranch: 'main',
    },
    imageUrl: 'https://user-images.githubusercontent.com/29712634/81721690-e2fb5d80-9445-11ea-8602-4b2294c964f3.png',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-doctornpm',
      options: {
        icon: './src/images/npm-favicon.png',
      },
    },
    'gatsby-plugin-meta-redirect'
  ],
}
