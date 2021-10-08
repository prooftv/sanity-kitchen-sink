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
                  buildHookId: '615f947942a48d28a9c5dec8',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gv7a9722',
                  apiId: '86e2f9d5-a2a6-4c43-8ca5-be4a03a27cd8'
                },
                {
                  buildHookId: '615f947a5c199326952a43fd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xuk5fztu',
                  apiId: '240a7fdf-8ffa-42ea-ae1a-3e3c0717e2b2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prooftv/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xuk5fztu.netlify.app', category: 'apps'}
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
