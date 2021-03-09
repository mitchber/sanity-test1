export default {
  widgets: [
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
                  buildHookId: '60470934ea4c745d582dde81',
                  title: 'Sanity Studio',
                  name: 'sanity-test-1-studio-uz3kq8g8',
                  apiId: '534baf44-fefc-4bce-b9fc-6de982df7c8f'
                },
                {
                  buildHookId: '60470934da3a6759eae2d63d',
                  title: 'Blog Website',
                  name: 'sanity-test-1-web',
                  apiId: '53895b21-d1ed-499e-99df-1d56a9532fc0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mitchber/sanity-test1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-test-1-web.netlify.app', category: 'apps'}
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
