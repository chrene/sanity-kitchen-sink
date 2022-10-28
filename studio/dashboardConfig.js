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
                  buildHookId: '635c44ca12f8e34841979f8e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-451nj782',
                  apiId: '1e1c63cc-130e-458f-a261-612a5ec14cf9'
                },
                {
                  buildHookId: '635c44cafbb80747edf48c55',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-em6novn3',
                  apiId: '76e50755-12b9-4a52-a3e2-4721209fd685'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrene/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-em6novn3.netlify.app', category: 'apps'}
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
