export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f972fa5b7ad440d3e224fbe',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-gqggkwgh',
                  apiId: '260fb029-705f-4cf6-82e8-5c1a40f4cef8'
                },
                {
                  buildHookId: '5f972fa5b7ad440e682247da',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-6zsve1ee',
                  apiId: '5a87a315-71b1-4fcd-833f-6b93b18ad04f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/squacks/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-6zsve1ee.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
